import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  TopScrollButton,
  FaScrollUp,
} from "../../styled-components/globalStyled";
import { motion } from "framer-motion";

export default function TopScroll() {
  const [showBtn, setShowBtn] = useState("scrollBtn none");

  window.onscroll = function () {
    topScroll();
  };

  const topScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setShowBtn("scrollBtn");
    } else {
      setShowBtn("none");
    }
  };

  const Top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <TopScrollButton
      onClick={Top}
      id='scrollBtn'
      className={showBtn}
      title='Go to top'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div>
        <FaArrowUp />
      </motion.div>
    </TopScrollButton>
  );
}
