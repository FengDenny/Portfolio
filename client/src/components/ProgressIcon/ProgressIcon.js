import React, { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Progress } from "../../styled-components/styled";
import { theme } from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";

export default function ProgressIcon() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <ThemeProvider theme={theme}>
      <Progress viewBox='0 0 60 60'>
        <motion.path
          fill='none'
          strokeWidth='5'
          stroke='#0B95AB'
          strokeDasharray='0 20px'
          d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill='none'
          strokeWidth='5'
          stroke='#0B95AB'
          strokeDasharray='0 20px'
          d='M14,26 L 22,33 L 35,16'
          initial={false}
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </Progress>
    </ThemeProvider>
  );
}
