import { Hero } from "@/components/home/Hero";
import { ManufacturerTicker } from "@/components/home/ManufacturerTicker";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <div className="p-3 sm:p-5">
        <Hero />
        <ManufacturerTicker />
      </div>
      <Services />
    </>
  );
}
