"use client";

import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
type AnimationProp = TargetAndTransition | VariantLabels | undefined;

const EnterAnimation = ({
  children,
  whileHover,
  whileTap,
}: {
  children: React.ReactNode;
  whileHover?: AnimationProp;
  whileTap?: AnimationProp;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, x: 2000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={whileHover}
      whileTap={whileTap}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
};

export default EnterAnimation;
