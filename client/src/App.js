import "./App.css";
import FeaturedServices from "./Components/FeaturesServices/FeaturedServices";
import Hero from "./Components/Hero/Hero";
import HomeAbout from "./Components/HomeAbout/HomeAbout";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeAbout />
      <FeaturedServices />
    </>
  );
}

export default App;
