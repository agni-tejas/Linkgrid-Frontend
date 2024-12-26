import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";
import { AnimatedTooltip } from "@/app/_ui/animatedavatars";
import SparklesText from "@/app/_ui/sparklestext";
import { useSearchDialog } from "./SearchDialogContext";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Co-founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Scarlett Mathew",
    designation: "CEO",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const SearchHeader: React.FC = () => {
  const { isHistoryDialogOpen } = useSearchDialog();
  return (
    <>
      <motion.h1
        {...fadeInUp}
        className="mt-20 text-7xl font-bold text-center mb-2
                   bg-gradient-to-r from-sky-500 to-indigo-800 dark:from-sky-500 dark:to-purple-500  bg-clip-text text-transparent
                   tracking-tight"
      >
        Hello Agni,
      </motion.h1>
      <motion.h1
        {...fadeInUp}
        className={`text-7xl ${
          isHistoryDialogOpen ? "hidden" : "block"
        } font-bold text-center mb-8`}
      >
        <SparklesText text="Discover your network with AI" />
      </motion.h1>

      <div
        className={`flex flex-row items-center justify-center mb-6 w-full ${
          isHistoryDialogOpen ? "hidden" : "block"
        }`}
      >
        <AnimatedTooltip items={people} />
      </div>
      <motion.h2
        {...fadeInUp}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-600 dark:text-[#d3d3d3] text-center mb-14 font-medium"
      >
        Search for skills, interests, or people within your network
      </motion.h2>
    </>
  );
};
