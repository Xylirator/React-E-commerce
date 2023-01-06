import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Features from "../components/Featured";
import Explore from "../components/Explore";
import CheapestBooks from "../components/CheapestBooks.jsx"

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Features />
        <CheapestBooks />
        <Explore />
      </main>
    </>
  );
};

export default Home;
