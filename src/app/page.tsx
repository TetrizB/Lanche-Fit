import { BigIdea } from "@/components/landing/big-idea";
import { Bonuses } from "@/components/landing/bonuses";
import { Delivery } from "@/components/landing/delivery";
import { Features } from "@/components/landing/features";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { ForWhom } from "@/components/landing/for-whom";
import { Guarantee } from "@/components/landing/guarantee";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Nutritionist } from "@/components/landing/nutritionist";
import { Offer } from "@/components/landing/offer";
import { RecipeExamples } from "@/components/landing/recipe-examples";
import { SocialProof } from "@/components/landing/social-proof";
import { Testimonials } from "@/components/landing/testimonials";
import { TestimonialsCarousel } from "@/components/landing/testimonials-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BigIdea />
        <TestimonialsCarousel />
        <Features />
        <SocialProof />
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
