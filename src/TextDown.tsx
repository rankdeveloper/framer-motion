import { motion } from "framer-motion";
export default function TextDown() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 50 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h2 className="text-5xl text-blue-700 uppercase">Hello Developer</h2>
    </motion.div>
  );
}
