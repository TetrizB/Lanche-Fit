import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { BigIdea } from "@/components/landing/big-idea";
import { Features } from "@/components/landing/features";
import { RecipeExamples } from "@/components/landing/recipe-examples";
import { Nutritionist } from "@/components/landing/nutritionist";
import { Bonuses } from "@/components/landing/bonuses";
import { ForWhom } from "@/components/landing/for-whom";
import { Testimonials } from "@/components/landing/testimonials";
import { Offer } from "@/components/landing/offer";
import { Guarantee } from "@/components/landing/guarantee";
import { Delivery } from "@/components/landing/delivery";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BigIdea />
        <Features />
        <RecipeExamples />
        <Nutritionist />
        <Bonuses />
        <ForWhom />
        <Testimonials />
        <Offer />
        <Guarantee />
        <Delivery />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
