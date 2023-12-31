import Brands from "@/components/brands";
import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Brands />
      <Carousel />
      <Footer />
    </main>
  );
}
