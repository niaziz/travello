import Brands from "@/components/brands";
import Carousel from "@/components/carousel";
import Header from "@/components/header";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Brands />
      <Carousel />
    </main>
  );
}
