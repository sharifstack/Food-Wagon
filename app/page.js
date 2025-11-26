import React from "react";
import Header from "./components/Header/Index";
import Banner from "./components/Banner/Index";
import FlashDeals from "./components/FlashDeals/Index";
import Guide from "./components/Guide.jsx/Index";
import PopularItems from "./components/PopularItems/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FlashDeals />
      <Guide />
      <PopularItems />
    </div>
  );
};

export default Home;
