import { Testimonials, FAQs, FeaturePackedFun, Hero } from "./_components";

export default function Home() {
  return (
    <section className="relative">
      <Hero />
      <FeaturePackedFun />
      <FAQs />
      <Testimonials />
    </section>
  );
}

