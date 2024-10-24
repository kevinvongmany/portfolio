import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -20},
  animate: { opacity: 1, y: 0},
  exit: { opacity: 0 },
};

const Animated = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
export default Animated;
