import { Hero } from "@/components/home/Hero";
import { ManufacturerTicker } from "@/components/home/ManufacturerTicker";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <ManufacturerTicker />
      <Services />
    </>
  );
}
