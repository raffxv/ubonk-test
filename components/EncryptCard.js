import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from 'react-icons/md';

const EncryptCard = ({ text, header, title, icon }) => {

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 1,
      }}
      className="group relative justify-center items-center max-w-[400px] 
      flex-nowrap overflow-hidden rounded-xl border-[2px] border-white/20 hover:border-emerald-400 hover:text-emerald-300 
      bg-black hover:bg-white/10 px-4 py-2 font-mono font-medium text-gray-400 transition-colors"
    >
      <div className="relative z-10 mx-4 grid text-start items-center gap-4 py-8">
        <div className="flex justify-between">
          <h1 className="font-bold">{header}</h1>
        </div>
        <p className="text-2xl mt-10 font-bold">{title}</p>
        <span className="font-normal">{text}</span>
        <span className="mt-8"> {icon} </span>
      </div>
      <motion.span
        initial={{
          y: "-50%",
        }}
        animate={{
          y: "100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-teal-400/0 from-40% via-teal-400/100 to-teal-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default EncryptCard;
