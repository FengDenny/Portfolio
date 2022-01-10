import React from "react";
import Hero from "./Hero";
import RecentProjects from "./RecentProjects";
import Technical from "./Technical";
import About from "./About";
import Contact from "./Contact";
import ProgressIcon from "../../components/ProgressIcon/ProgressIcon";
import ScrollToTop from "../../components/TopScroll/TopScroll";

export default function Home() {
  return (
    <>
      <ProgressIcon />
      <Hero />
      <About />
      <RecentProjects />
      <Contact />
      <Technical />
    </>
  );
}
