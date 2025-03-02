'use client'
import {
  Button,
  Progress,
  Card,
  CardHeader,
  CardBody,
  Image,
  Input,
  CardFooter, 
  Link
} from "@nextui-org/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as web3 from '@solana/web3.js'
import styles from "../styles";
import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import { Connection, PublicKey } from "@solana/web3.js";
import 'react-toastify/dist/ReactToastify.css';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import dynamic from "next/dynamic";
import { BiLogoTelegram, BiLogoDiscordAlt } from "react-icons/bi";

import { BsDot } from "react-icons/bs";
import {  ScanIcon, Spinner} from '../components/Icon';
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { CgArrowTopRight  } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { RiDiscordLine, RiTwitterLine } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";


const DynamicChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const DynamicTicker = dynamic(() => import('../components/Ticker'), { ssr: false });

const icons = {
  spinner:  <Spinner size={22}/>,
  scan:  <ScanIcon size={22}/>,
};

const Buy = () => {
  const [txSig, setTxSig] = useState('');
  const [solAmount, setSolAmount] = useState('');
  const { publicKey, disconnect, wallet, balance, connected, sendTransaction } = useWallet();
  const receiver = '8PVwDbMzKiuEXV5WN7Cfd249xAJjokv7VVpmePPMkikh';
  const { connection } = useConnection();
  const [solBalance, setSolBalance] = useState(null);
  const [txStatus, setTxStatus] = useState(''); 
  const [processing, setProcessing] = useState(false); 
  
  const SOLToUBONKConversionRate = 9990000;

  useEffect(() => {
    const getBalances = async () => {
      try {
        if (!connected || !publicKey) {
          return;
        }

        const connection = new Connection('https://cool-clean-friday.solana-mainnet.quiknode.pro/5d4f1cb01a8c07492695c52553b7b7d525926a7f/');

        const solBalance = await connection.getBalance(publicKey);
        setSolBalance(solBalance / 10 ** 9); // Convert lamports to SOL
   
        const tokenAddress = new PublicKey('8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5');
        const token = new Token(
          connection,
          tokenAddress,
          TOKEN_PROGRAM_ID,
          null
        );
      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    };

    getBalances();
  }, [connected, publicKey]);

  const convertSOLToUBONK = (solAmount) => {
    if (!solAmount) return 0;
  
    const UBONKToken = solAmount * SOLToUBONKConversionRate;
  
    return UBONKToken.toLocaleString();
  };

  const UBONKToken = convertSOLToUBONK(solAmount);


  const sendSol = async () => {
    if (!connection || !publicKey || !solAmount) return;
  
    const transaction = new web3.Transaction();
    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: receiver,
      lamports: LAMPORTS_PER_SOL * solAmount,
    });
  
    transaction.add(sendSolInstruction);
    try {
      setProcessing(true);
  
      const sig = await sendTransaction(transaction, connection);
      setTxSig(sig);
        setTimeout(() => {
        setTxStatus('Success');
        setTxSig('');
        setProcessing(false);
        toast.success(`Transaction successful! committed ${solAmount} SOL for some UBONK`, { autoClose: 10000 });
      }, 5000);
    } catch (error) {
      setProcessing(false);
      setTxStatus('Failed');
  
      if (
        error.name === 'WalletSendTransactionError' &&
        error.message === 'User rejected the request.'
      ) {
        toast.error('Unexpected error: transaction cancelled by user', { autoClose: 3000 });
      } else {
        toast.error(`Unexpected error: insufficient SOL funds`, { autoClose: 3000 }, 5000);
      }
    }
  };

  const [chartOptions, setChartOptions] = useState({
    series: [51, 49], 
    options: {
      chart: {
        type: 'donut',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      stroke: {
        colors: 'transparent'
      },
      colors: ['#f0ad48','#f78d36','#f5b164', '#a17b54', '#fce3c0'], 
      labels: ['Liquidity', 'Presale',],
      legend: {
        position: 'right',
        fontWeight: 500,
        fontSize: '12px',
        horizontalAlign: 'center', 
        onItemClick: {
          toggleDataSeries: true
      },
      },
    
      markers: {
        width: 12, 
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
      tooltip: {
        y: {
          formatter: function (value) {
            return ` ${value}%`;
          }
        }
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
              height: 350,
            },
          },
        },
      ],
    },
  });

  
  return (
    <section className={`justify-center items-center lg:px-20 mx-4 lg:mx-20 `}>
    <div className={`${styles.xPadding}  py-20`}>
      <div className="grid lg:flex justify-center items-start gap-4">
      <Card className="bg-gray-800 md:w-[600px] lg:w-[800px] rounded-3xl py-2 px-2 border-gray-800">
          <CardHeader className="flex  items-start justify-between">
              <div className="flex gap-6">
                <Image
                  isBlurred
                  width={50}
                  height={50}
                  radius='full'
                  src="https://pbs.twimg.com/profile_images/1739437848531734528/--HAtlIr_400x400.jpg"
                  alt="NextUI Album Cover"
                  classNames="m-5"
                />          
                <div className="grid ">
                  <h4 className="text-xl md:text-2xl font-bold text-white">UBONK Presale {'(LAST ROUND)'}</h4>
                  <div className="flex gap-4 mt-2">
                  <Link href='https://twitter.com/unibonk' target='_blank'>
                      <RiTwitterLine className="text-white/50 hover:text-white text-md"/>
                    </Link>
                    <Link href='https://discord.gg/aEMpvXSSFb' target='_blank'>
                      <RiDiscordLine className="text-white/50 hover:text-white text-lg"/>
                    </Link>
                    <Link href='https://t.me/unibonk' target='_blank'>
                      <LiaTelegramPlane  className="text-white/50 hover:text-white text-md"/>
                    </Link>
                    <div className="hidden md:flex gap-3">
                    <Link href='https://solscan.io/token/8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5' target='_blank'>
                      <Image src='https://public-api.solscan.io/logo.png' alt='' className="w-[17px] h-[17px] rounded-full"/>
                    </Link>
                    <Link href='https://birdeye.so/token/8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5?chain=solana' target='_blank'>
                      <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEVHcEz/ZRb/Zxb/eBL/dRP/vwP/ig7/tgX/jg3/jgz/zgD/eBL/gRD/wQT/rQf/tAb/ZBf/Yxf/Yhf/zgD/vAT/ygH/mAz/qAj/////bhT/mQb/dhH/aBX/sAP/kgX//Pf/dwD/hQb/nwL/qQL/uwT/yZ3/tVL/59f/oS3/uXj/ygD/iDD/olX/9Or/26t9B5teAAAAGHRSTlMAdQ2cPvBMQUD8SOvIBIDegqYpiTHSbNrH1elhAAAAvUlEQVQ4jd2PVxaCMBAA6U3BrktCKh3E+x/PgO/5Q8IBmN+Z3U0sa8c4tn3d8l5eFMXF7IM8n4uzcR5jvCQGH/HxV7iO3osRWo7xwTQvxBug59gz+DgWvFYrDAsiSmNRT8D4Ue8RolRdMAWhlKroVNAKV+ubDqmiAahFoPFlA6yXsmfAaKzxhDQMFlhHo7WvCCHlRyVTjdBT4yv/pAqFlHL9gLDy75aVZnPzyjT3B1/37T/J8Nj06S3Z9DvgC7vEE0aY2FgUAAAAAElFTkSuQmCC' alt='' className="w-[18px] h-[18px] rounded-full"/>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="flex items-center text-[12px] text-green-500/50 bg-green-500/10 rounded-full">
                <BsDot size={24}/> <span className="ml-[-2px] font-semibold tracking-wide mr-2">Sale live</span>
              </h4>   
          </CardHeader>
          <CardBody>
              <div className="">
                  <h4 className="text-white">
                  The ultimate meme coin project on Solana. Our mission is to infuse joy into the crypto space! 🌐🚀 Embracing the power of laughter, we aim to create a vibrant community that not only trades UBONK but shares in the delight of a playful financial journey.

                  </h4>
              </div>
              <div className="grid gap-4 mt-10">
                <h4 className="font-bold text-white">Tokens Details</h4>

              <div className="flex justify-between text-white">
                  <h4 className="text-sm">Token Name</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>
                  <h4 className="text-sm font-bold">UNIBONK</h4>
              </div>
              
              <div className="flex justify-between text-white">
                  <h4 className="text-sm">Symbol</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>

                  <h4 className="text-sm font-bold">UBONK</h4>
              </div>
          
              <div className="flex justify-betweden text-white">
                  <h4 className="text-sm ">Decimals</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>

                  <h4 className="text-sm">5</h4>
              </div>

              <div className="flex justify-between text-white">
                  <h4 className="text-sm">Token Supply</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>
                  <h4 className="text-sm">98,990,000,000 UBONK</h4>
              </div>
         
              <div className="flex justify-between text-white">
                  <h4 className="text-sm">Presale rate</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>

                  <h4 className="text-sm "> 1 SOL = 9.990.000 UBONK</h4>
              </div>
              <div className="flex justify-between text-white">
                  <h4 className="text-sm">Min purchase</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>
                  <h4 className="text-sm">1 SOL</h4>  
              </div>
              <div className="flex justify-between text-white">
                  <h4 className="text-sm">Max purchase</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>
                  <h4 className="text-sm">25 SOL</h4>
              </div>
                 
                
                <div className="flex justify-between text-white">
                  <h4 className="text-sm font-bold">Fairlaunch</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>
                  <h4 className="text-sm font0bold "> after the CAPs target reached (250 SOL)</h4>
              </div>
                
           <div className="flex justify-between text-white">
                  <h4 className="text-sm font-bold">Locked LP</h4>
                  <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>
                   <Link href='https://solscan.io/token/89ZKE4aoyfLBe2RuV6jM3JGNhaV18Nxh8eNtjRcndBip' target='_blank'><h4 className="text-sm text-green-400 hover:text-green-200 font-bold">Raydium V4 {'(RAY-SOL)'}</h4></Link>
            </div>
          
   
                
             
           <div className="flex justify-between text-white">
                  <h4 className="text-sm">Contract Address</h4>
                               <div className="w-full flex-1 border-t-2 mx-2 mt-[15px] border-dotted border-white/5"/>

                    <Link href='https://solscan.io/token/8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5' target='_blank'>  <h4 className="text-sm hidden md:flex  items-center text-green-400 hover:text-green-200"> 8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5 <CgArrowTopRight   size={20}/></h4></Link>
            
                          <Link href='https://solscan.io/token/8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5' target='_blank'> 
                  <h4 className="text-sm md:hidden flex  items-center text-green-400 hover:text-green-200">
                    8QcA6zp6Q..tUmKKTMjq5 
                    <CgArrowTopRight  size={20} />
                  </h4>
                       </Link>      
              </div>
          </div>
            
          </CardBody>
      </Card>
        
       <div className="grid gap-4">
      <Card className="bg-gray-800 lg:w-[400px] border-gray-800">
          <CardHeader className="flex justify-center items-center">
          <DynamicTicker endTime="2024-06-1T20:00:00Z" />
          
          </CardHeader>
          <div className="mx-5">
          <Progress
          value={99.2}
          maxValue={100}
            classNames={{
              base:'py-4',
              indicator: "bg-gradient-to-r from-green-500 to-orange-500",
            }}
            className="max-w-full"
          />
          </div>

          <div className="flex justify-between px-5 mt-[-4px]">
            <h4 className="font-bold text-sm text-orange-200">245 SOL</h4>
            <h4 className="font-bold text-sm text-orange-200">250 SOL</h4>
          </div>

        <CardBody>
          {connected && (
          <div className='py-2 flex items-center gap-2'>
           <h4 className="text-orange-200 font-light text-xs "> amount: 
            <span className="font-bold text-orange-300">
              {solBalance} SOL
            </span>
            </h4>
            <p className='text-orange-200/50 hover:text-orange-200 font-light text-[10px] hover:bg-orange-500/20 bg-orange-500/10 p-1 rounded-md' onClick={disconnect}>disconnect</p>
          </div>
        )}
          <Input
          value={solAmount}
          onChange={(e) => setSolAmount(e.target.value)}
          type="number"
          variant="bordered"
          placeholder="1"
          color="warning"
          min="1"
          size='lg'
          classNames={{
          innerWrapper:'bg-gray-700 font-bold',
          inputWrapper:'bg-gray-700 border-gray-800 font-extrabold text-orange-200'
          }}
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <Image src='https://m.bittime.com/m-static/SOL.png' alt="" className="w-[30px] h-[30px] rounded-full object-contain"/>
            </div>
          }
          endContent={
           <div className="flex items-center">
            <label className="sr-only" htmlFor="currency">
              Currency
            </label>
            <select
              className="outline-none border-0 bg-transparent text-default-400 text-small"
              id="currency"
              name="currency"
            >
              <option>SOL</option>
              <option disabled>USDC</option>
            </select>
          </div>
        }
        />             
      {solAmount && (
        <div className='text-orange-200 text-xs flex justify-between mt-4 items-center'>
          <span>You will receive : </span>
          <span className="font-bold text-orange-300">{UBONKToken} UBONK</span>
          </div>
      )}
      </CardBody>
            {connected ? (
              <>
             
              <Button
                onClick={sendSol}
                size='lg'
                className="px-4  mx-4 py-4 my-4 mb-4 bg-[#d17f2c] hover:bg-orange-400 text-orange-800/75 hover:text-orange-100 font-semibold"
              
                isDisabled={!!txSig || parseFloat(solAmount) < 1 || solAmount.trim() === ''}
                >
                {txSig ? 'Loading' : 'Buy with SOL'}
                {txSig && icons.spinner}
              </Button>
              </>
            ):(
              <>
               <CardFooter className="w-full justify-start items-center mb-4">
                <WalletMultiButton style={{background:'#d17f2c',  borderRadius:'10px'}}> Connect  Wallet</WalletMultiButton>
                </CardFooter>
              </>
            )}
      </Card>
      <Card className="bg-gray-800 lg:w-[400px] border-gray-800">
          <CardHeader className="flex px-8 justify-center  items-center">
            <h4 className="text-white font-bold text-lg">Tokenomics</h4>
            </CardHeader>
          <div className="py-4 flex justify-center items-center">
          <DynamicChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="donut"
          width={350}
          height={350}
        />
     
     </div>

      </Card>
      </div>
      </div>
    </div>

  </section>
);

};

export default Buy;

