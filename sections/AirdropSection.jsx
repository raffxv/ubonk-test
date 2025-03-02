// 'use client'
import styles from "../styles";
import { Button, Divider, Image, Spacer } from "@nextui-org/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import logo from '../public/UBONK.png';

const AirdropSection = () => {
  const { connected, publicKey, disconnect } = useWallet();
  const [solBalance, setSolBalance] = useState(null);
  const [ubonkBalance, setUbonkBalance] = useState(null);
  const [jupBalance, setJupBalance] = useState(null);
  const [bonkBalance, setBonkBalance] = useState(null);
  const [wenBalance, setWenBalance] = useState(null);

  useEffect(() => {
    const getBalances = async () => {
      try {
        if (!connected || !publicKey) {
          return;
        }
    
        const connection = new Connection('https://cool-clean-friday.solana-mainnet.quiknode.pro/5d4f1cb01a8c07492695c52553b7b7d525926a7f/');
        const solBalance = await connection.getBalance(publicKey);
        setSolBalance(solBalance / 10 ** 9);
    
        try {
          const bonkBalance = await getTokenBalance(publicKey, 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263');
          setBonkBalance(parseFloat(bonkBalance));
        } catch (error) {
          console.error("Error fetching BONK balance:", error);
          setBonkBalance(0);
        }
        
        try {
          const ubonkBalance = await getTokenBalance(publicKey, '8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5');
          setUbonkBalance(parseFloat(ubonkBalance));
        } catch (error) {
          console.error("Error fetching UBONK balance:", error);
          setUbonkBalance(0);
        }
        try {
          const jupBalance = await getTokenBalance(publicKey, 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN');
          setJupBalance(parseFloat(jupBalance));
        } catch (error) {
          console.error("Error fetching JUP balance:", error);
          setJupBalance(0);
        }

        try {
          const wenBalance = await getTokenBalance(publicKey, 'WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk');
          setWenBalance(parseFloat(wenBalance));
        } catch (error) {
          console.error("Error fetching WEN balance:", error);
          setWenBalance(0);
        }
      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    };

    getBalances();
  }, [connected, publicKey]);

  const getTokenBalance = async (publicKey, tokenPublicKey) => {
    try {
      const connection = new Connection('https://cool-clean-friday.solana-mainnet.quiknode.pro/5d4f1cb01a8c07492695c52553b7b7d525926a7f/');
      const tokenBalances = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        {
          programId: TOKEN_PROGRAM_ID
        }
      );
  
      const tokenBalance = tokenBalances.value.find(
        (account) => account.account.data.parsed.info.mint.toString() === tokenPublicKey.toString()
      );
  
      return tokenBalance ? tokenBalance.account.data.parsed.info.tokenAmount.amount : "0";
    } catch (error) {
      console.error(`Error fetching balance for token ${tokenPublicKey}:`, error);
      return "0";
    }
  };

const solPoints = solBalance > 0.000001 ? 333333 : 0;
const jupPoints = jupBalance > 1 ? 500000 : 0;
const wenPoints = wenBalance > 1 ? 500000 : 0;
const bonkPoints = bonkBalance > 1 ? 500000 : 0;
let ubonkPoints = 0;
if (ubonkBalance >= 50000000000 && ubonkBalance <= 100000000000) {
  ubonkPoints = 500000;
} else if (ubonkBalance >= 100000000001) {
  ubonkPoints = 4200201;
} 

const totalPoints = solPoints + jupPoints + wenPoints + bonkPoints  + ubonkPoints;
  return (
    <section className={` flex justify-center items-center my-20 lg:py-20`}>

      <div className={`${styles.xPadding} text-white lg:mx-3 px-3 z-10`}>
        <div className="flex justify-center items-center ">
          <div className="justify-center items-center ">
            <div className="flex justify-center items-center text-center">
            </div>     
            <div className="rounded-3xl p-1 bg-gradient-to-r from-sky-400 via-green-400 to-yellow-200 border-white md:w-[580px]">
             
              <div className=" bg-cards rounded-3xl py-8 px-2 md:px-6">
             
                {connected ? (
                  <>
                    <div className="flex justify-center items-center gap-4">
                    </div>
                    <div className="">
                      <h4 className="text-center py-4">Congratulations, you received</h4>
                      <div className="flex justify-center items-center gap-2  ">
                        <h4 className="text-center font-extrabold text-white text-4xl md:text-4xl lg:text-6xl">
                       {totalPoints.toLocaleString()}
                        </h4>
                        <Image src='https://pbs.twimg.com/profile_images/1739437848531734528/--HAtlIr_400x400.jpg' alt=''  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full object-contain"/>
                      </div>
                      
                      <div className=' justify-center items-center'>
                        <h4 className="text-center font-mono text-sm mt-10 my-4 text-white/50">
                          Eligibility breakdown
                        </h4>
                        <div className="border border-gray-400/20 rounded-xl bg-gray-800">

                        <div className="flex border-b border-gray-300/20">
                            <div className="flex-1 border-r border-slate-300/20 p-4 text-center">
                             Have at least 2-3 interaction on Solana Mainnet
                            </div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center">
                              {solBalance > 0.00001 ? <FaCircleCheck className='text-emerald-500 ' />:<FaCircleXmark className='text-gray-600/75 '/>}
                            </div>
                          </div>
                          <div className="flex border-b border-gray-300/20">
                            <div className="flex-1 border-r border-slate-300/20 p-4 text-center">Hold JUP</div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center"> 
                            {jupBalance > 1 ? <FaCircleCheck className='text-emerald-500 ' />:<FaCircleXmark className='text-gray-600/75 '/>}
                            </div>
                          </div>

                          <div className="flex border-b border-gray-300/20">
                            <div className="flex-1 border-r border-slate-300/20 p-4 text-center">Hold BONK</div>
                              <div className="flex-1 p-4 text-center flex justify-center items-center"> 
                              {bonkBalance > 1 ? <FaCircleCheck className='text-emerald-500 ' />:<FaCircleXmark className='text-gray-600/75 '/>}
                              </div>
                          </div>

                        

                          <div className="flex border-b border-gray-300/20">
                            <div className="flex-1 border-r border-slate-300/20 p-4 text-center">
                              Hold UBONK
                            </div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center">
                              {ubonkBalance > 500000 ? <FaCircleCheck className='text-emerald-500 ' />:<FaCircleXmark className='text-gray-600/75 '/>}
                            </div>
                          </div>

                          <div className="flex border-b border-slate-300/20">
                            <div className="flex-1 border-r border-gray-300/20 p-4 text-center">Hold WEN</div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center"> 
                            {wenBalance > 1 ? <FaCircleCheck className='text-emerald-500 ' />:<FaCircleXmark className='text-gray-600/75 '/>}
                            </div>
                          </div>
                         
                       
                          <div className="flex border-b border-slate-300/20">
                            <div className="flex-1 border-r border-gray-300/20 p-4 text-center">Airdrop whitelist</div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center"> <FaCircleXmark className='text-gray-600/75 '/></div>
                          </div>
                          <div className="flex">
                            <div className="flex-1 border-r border-gray-300/20 p-4 text-center">Early Contributor</div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center"> <FaCircleXmark className='text-gray-600/75 '/></div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-6">
                      <h4 className="text-center font-mono font-bold text-xs md:text-sm">
                        </h4> 
                        <h4 className="text-center font-mono text-xs my-2 lg:px-10">
                        Your qualification criteria will appear above. Once you qualify, you can claim your $UBONK airdrop when the claim period has started.
                        </h4> 
                      </div>  
                      <Divider className="bg-white/10 my-4" />
                      <div className="flex justify-center items-center mt-4">
                        <Button size="sm" variant="light" onClick={disconnect} className="font-bold text-white/50">disconnect</Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="px-8 py-10  justify-center items-center">
                      <div className="text-center justify-center items-center text-sm">
                        <h4 className="text-4xl text-white font-extrabold">$UBONK AIRDROP</h4>
                      </div>
                      <div className="flex justify-center mt-8 my-6 items-center">
                        <span className="text-white/50 text-sm text-center">Connect wallet to enter an airdrop</span>
                      </div>
                      <div className="flex justify-center items-center">
                        <WalletMultiButton style={{ padding: '30px', paddingLeft: '50px', paddingRight: '50px', background: '#d17f2c', borderRadius: '10px' }}> Connect </WalletMultiButton>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirdropSection;
