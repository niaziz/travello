import Footer from "@/components/footer";
import HeroOverly from "@/components/hero-overlay";
import Nav from "@/components/nav";
import SideBooker from "@/components/side-booker";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-landscape h-[90vh] bg-cover bg-no-repeat relative block">
      <HeroOverly text="EXPLORE" styledText="Landscapes" />
      <div className="container relative">
        <Nav />
      </div>

      <div className="lg:mx-[10rem] mx-[3rem] md:mx-[4rem] o pt-16 md:flex relative text-center shadow-xl">
        <div className="w-8/12">
          <div>{children}</div>
          <Image
            className="absolute left-0 bottom-0"
            src="/green.svg"
            height={300}
            width={300}
            alt="1"
          />
        </div>
        <div className="w-4/12 px-5 relative">
          <SideBooker />
          <Image
            src="/plane.svg"
            height={600}
            width={500}
            alt="Plane"
            className="relative right-0 bottom-0 hidden md:block"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
