import { motion } from "framer-motion";

export default function StaggerdText() {
  return (
    <>
      <div className="bg-green-400 h-screen flex flex-col items-center justify-center gap-2">
        <FlipText href="#">Linkedin</FlipText>
        <FlipText href="#">Instagram</FlipText>
      </div>
    </>
  );
}

type FlipTextProps = {
  href: String | object | any;
  children: String;
};
const FlipText = ({ href, children }: FlipTextProps) => {
  return (
    <motion.a
      href={href}
      transition={{ staggerChildren: 0.2 }}
      initial="initial"
      whileHover="hoverd"
      className="relative block overflow-hidden whitespace-nowrap text-5xl font-black uppercase"
    >
      <div>
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{ initial: { y: 0 }, hoverd: { y: "-100%" } }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
