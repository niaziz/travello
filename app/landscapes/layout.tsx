import Footer from "@/components/footer";
import HeroOverly from "@/components/hero-overlay";
import Nav from "@/components/nav";
import SideBooker from "@/components/side-booker";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-landscape h-[90vh] bg-cover bg-no-repeat relative block">
      <HeroOverly text="EXPLORE" styledText="Landscapes" />
      <div className="container relative">
        <Nav />
      </div>

      <div className="mx-[10rem] pt-16 flex relative text-center shadow-xl">
        <div className="w-8/12">{children}</div>
        <div className="w-4/12 px-5">
          <SideBooker />
        </div>
      </div>
      <Footer />
    </div>
  );
}
