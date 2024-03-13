"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionUp = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration:1, ease:[0.76, 0, 0.24, 1]}}
      viewport={{once:true}}
    >
      {children}
    </motion.div>
  );
};

export default SectionUp;
