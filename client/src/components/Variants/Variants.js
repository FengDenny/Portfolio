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
