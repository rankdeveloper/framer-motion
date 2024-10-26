import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const controls = useAnimationControls();
  const handleFlip = () => {
    controls.start("flip");
  };
  const stopFlip = () => {
    controls.stop("exit");
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
      <button
        className="bg-purple-600 text-white py-2 px-12 rounded-sm mb-2"
        onClick={handleFlip}
      >
        Flip
      </button>
      <button
        className="bg-red-400 text-white py-2 px-12 rounded-sm mb-2"
        onClick={stopFlip}
      >
        Stop
      </button>
      <motion.div
        className="w-40 h-40 bg-orange-600"
        variants={{
          initial: {
            rotate: 0,
            background: "#c9bd97",
            borderRadius: "0%",
          },
          flip: {
            rotate: 360,
            borderRadius: "20%",
            transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
          },
          exit: {
            rotate: 0,
            borderRadius: "0%",
          },
        }}
        animate={controls}
        initial="initial"
      ></motion.div>
    </div>
  );
}
