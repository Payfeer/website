import { CTA, FAQs, FeaturePackedFun, Hero } from "./_components";

export default function Home() {
  return (
    <section className="relative">
      <Hero />
      <FeaturePackedFun />
      <FAQs />
      <div className="-mb-24">
        <CTA />
      </div>
    </section>
  );
}

