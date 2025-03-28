"use client";
import { motion } from "framer-motion";

const TextSmoothPopUpClassic = () => {
  // Words for each line
  const line1 = ["Things", "To", "Do", "In", "Dorset"];
  const line2 = ["Top ", "Local ", "Attractions ", "and ", "Days ", "Out "];

  return (
    <div className="text-center flex flex-col justify-center items-center h-full space-y-4">
   
      <motion.h1
        className="text-[60px] font-[700] font-Merriweather"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {line1.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 30 }}  // Starts from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="inline-block mx-2 text-white"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

     
      <motion.h1
        className="text-[40px] font-[700] font-Merriweather"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}  
        transition={{
          delay: line1.length * 0.2 + 0.5, 
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 1,  
        }}
      >
        {line2.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -50 }}  // Starts from left
            animate={{ opacity: 1, x: 0 }}    // Moves to position from left to right
            transition={{
              delay: index * 0.2,  // Sequential delay for each word in line
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-white font-[300] text-[25px]"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default TextSmoothPopUpClassic;
 