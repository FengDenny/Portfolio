import React from "react";
import Hero from "./Hero";
import RecentProjects from "./RecentProjects";
import Technical from "./Technical";
import About from "./About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <RecentProjects />
      <Technical />
    </>
  );
}
