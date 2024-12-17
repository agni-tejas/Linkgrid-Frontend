// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function FeatureImage({ features }) {
//   return (
//     <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
//       <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={features}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           transition={{ duration: 0.4 }}
//           className="relative h-full w-full"
//         >
//           {features}
//           <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
