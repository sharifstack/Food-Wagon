import React from "react";
import Header from "./components/Header/Index";
import Banner from "./components/Banner/Index";
import FlashDeals from "./components/FlashDeals/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FlashDeals />
    </div>
  );
};

export default Home;
