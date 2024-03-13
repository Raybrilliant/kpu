'use client'
import React from "react";
import { motion } from "framer-motion";

const HoverVisible = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};

export default HoverVisible;
