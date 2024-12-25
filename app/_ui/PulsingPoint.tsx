import { motion } from "framer-motion";

const PulsingPoint = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="flex-shrink-0 w-2 h-2"
  >
    <span className="flex h-2 w-2">
      <span
        className="animate-ping absolute inline-flex h-2 w-2 rounded-full 
                   bg-green-400 opacity-75"
      />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
    </span>
  </motion.div>
);

export default PulsingPoint;
