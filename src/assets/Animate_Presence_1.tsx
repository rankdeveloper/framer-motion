import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Animate_Presence_1() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded "
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="box"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-lime-500 w-[300px] h-[300px] rounded-md p-2 mt-2"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
