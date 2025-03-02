'use client';
import { Footer, Navbar, WalletContextProvider } from '../components'
import { Spacer } from '@nextui-org/react';
import { Hero, Insight, About, Brand, Community, Buy, Features, ActiveSlider} from '../sections';
const Home = () => {
  return (
  <WalletContextProvider>
  <div className='bg-hero'>
    <Navbar />
    <Hero />
  </div>
 
  <div className='bg-gray-900 overflow-hidden'>

    <ActiveSlider />

    <Features /> 
    <div className='bg-gray-800'>
  <About />
  </div> 
    <Insight />  
    <Spacer y={100} />
    </div>    
    <div className='hidden lg:flex bg-gray-900'>
      <Spacer y={200} />
      </div>
    <div className='bg-gray-800 overflow-hidden'>
      <Brand />
    </div>
  <div className='bg-gray-900 overflow-hidden'>
  <Spacer y={100} />

    <Community />
    <Footer />
  </div>
  </WalletContextProvider>
  );
}

export default Home;
