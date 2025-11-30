import React from "react";
import Header from "./components/Header/Index";
import Banner from "./components/Banner/Index";
import FlashDeals from "./components/FlashDeals/Index";
import Guide from "./components/Guide.jsx/Index";
import PopularItems from "./components/PopularItems/Index";
import FeaturedRestaurants from "./components/FeaturedRestaurants/Index";
import SearchByFood from "./components/SearchByFood/Index";
import AppInfo from "./components/AppInfor/Index";
import Details from "./components/Details/Index";
import ReadyToOrder from "./components/ReadyToOrder/Index";
import Footer from "./components/ui/Footer/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FlashDeals />
      <Guide />
      <PopularItems />
      <FeaturedRestaurants />
      <SearchByFood />
      <AppInfo />
      <Details />
      <ReadyToOrder />
      <Footer />
    </div>
  );
};

export default Home;
