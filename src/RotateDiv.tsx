import { motion } from "framer-motion";
export default function RotateDiv() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        rotate: [0, 90, 270],
        borderRadius: ["20%", "20%", "50%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        times: [0, 0.2, 0.5],
      }}
      className="bg-red-500 w-16 h-16 "
    ></motion.div>
  );
}
