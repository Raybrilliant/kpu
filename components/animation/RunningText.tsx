"use client";
import React from "react";
import { motion } from "framer-motion";
export const RunningText = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{
        x: "-250%",
        transition: { duration: 20, repeat: Infinity, ease: "linear"},
      }}
    >
      {children}
    </motion.div>
  );
};
