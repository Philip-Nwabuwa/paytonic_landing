"use client";

import React, { ReactNode } from "react";

import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { AnimationProps, motion } from "framer-motion";

type VariantKeys =
  | "slideUp"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown"
  | "showUp";

const variants: Record<VariantKeys, AnimationProps["variants"]> = {
  slideUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { transitionDuration: "0.6s", type: "tween" },
  },
  slideLeft: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { transitionDuration: "0.6s", type: "tween" },
  },
  slideRight: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { transitionDuration: "0.6s" },
  },
  scaleUp: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { transitionDuration: "0.6s" },
  },
  showUp: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { transitionDuration: "0.6s", type: "tween" },
  },
  scaleDown: {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { transitionDuration: "0.6s" },
  },
};

type Props = {
  className?: string;
  children: ReactNode;
  variant?: VariantKeys;
  transitionDelay?: number;
};

export const ScrollAnimate = ({
  children,
  className: cls,
  variant = "slideUp",
  transitionDelay,
}: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { initial, animate } = variants[variant] as any;

  return (
    <motion.div
      initial={initial}
      animate={inView ? animate : initial}
      //   transition={transition}
      //   variants={inView ? _variant : undefined}
      //   initial="initial"
      //   animate="animate"
      //   exit="exit"
      transition={{ duration: 0.6, delay: transitionDelay }}
      className={classNames("", cls)}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
