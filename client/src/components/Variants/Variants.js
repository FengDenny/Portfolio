// Framer

export const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 30,
    rotate: -1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export const rotateVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 30,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

// Technical
export const container = {
  offscreen: { opacity: 1, scale: 0 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.5,
    },
  },
};

export const item = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

export const bannerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      easeIn: [0.17, 0.67, 1, 1.5],
    },
  },
};
export const bannerItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
