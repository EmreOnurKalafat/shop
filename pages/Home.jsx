import React from "react";
import Announcement from "../src/components/Announcement";
import Navbar from "../src/components/Navbar";
import Slider from "../src/components/Slider";
import Categories from "../src/components/Categories";
import Products from "../src/components/Products";
import Newsletter from "../src/components/Newsletter";
import Footer from "../src/components/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
