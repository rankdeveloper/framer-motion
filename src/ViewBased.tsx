import { motion } from "framer-motion";

export default function Inview() {
  return (
    <>
      <div className="h-[150vh] bg-gray-900"></div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileInView={{ opacity: 1 }}
        className="bg-red-500 p-x py-5 h-[50vh]"
      >
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, neque?
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          necessitatibus omnis sunt accusantium dolorum sequi veritatis, magni
          non architecto explicabo qui voluptatibus nemo veniam minima quaerat
          ea sed in alias facere labore laudantium fugiat! Odio ratione ut,
          dolor rem praesentium unde tempore nihil temporibus quam autem
          aliquam, nulla assumenda provident!
        </p>
      </motion.div>
    </>
  );
}
