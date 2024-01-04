import Brands from "@/components/brands";
import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Footer from "./footer";
import Category from "./category";
import DareToLive from "./Home/DareToLive";
import GetYourFavorite from "./Home/GetYourFavorite";
import NextHolidy from "./Home/NextHolidy";
import Nature from "./Home/Nature";
import SightSeeingTour from "./Home/SightSeeingTour";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Brands />
      <Category />
      <DareToLive />
      <GetYourFavorite />
      <NextHolidy />
      <SightSeeingTour />
      <Nature />
      {/* <TrendingPackage /> */}
      <Carousel />
      <Footer />
    </main>
  );
}
