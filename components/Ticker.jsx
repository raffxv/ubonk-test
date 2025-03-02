import { useState, useEffect } from 'react';

const Ticker = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const endDateTime = new Date(endTime);
    const difference = endDateTime - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const formatTimeUnit = (unit) => (unit ? unit.toString().padStart(2, '0') : '00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <div className='grid text-center justify-center items-center'>
      <h4 className="text-white font-bold">PRESALE IS LIVE</h4>
       <span className='text-xs px-2 text-white font-mono py-2'>Get multiple bonus x1.5 from your total buy on presale and distributed v4 will be sent at :</span> 
     </div>
      <  div className="flex justify-center items-center gap-4 mt-4">
        <div className="bg-[#d17f2c] p-2 rounded-md w-[40px]">
          <h4 className="font-bold text-orange-100">{formatTimeUnit(timeLeft.days)}</h4>
        </div>
        <div className="bg-[#d17f2c] p-2 rounded-md w-[40px]">
          <h4 className="font-bold text-white">{formatTimeUnit(timeLeft.hours)}</h4>
        </div>
        <div className="bg-[#d17f2c] p-2 rounded-md w-[40px]">
          <h4 className="font-bold text-white">{formatTimeUnit(timeLeft.minutes)}</h4>
        </div>
        <div className="bg-[#d17f2c] p-2 rounded-md w-[40px]">
          <h4 className="font-bold text-white">{formatTimeUnit(timeLeft.seconds)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
