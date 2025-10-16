
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const BigIdea = dynamic(() => import('@/components/landing/big-idea').then(mod => mod.BigIdea));
const Features = dynamic(() => import('@/components/landing/features').then(mod => mod.Features));
const SocialProof = dynamic(() => import('@/components/landing/social-proof').then(mod => mod.SocialProof));
const RecipeExamples = dynamic(() => import('@/components/landing/recipe-examples').then(mod => mod.RecipeExamples));
const Nutritionist = dynamic(() => import('@/components/landing/nutritionist').then(mod => mod.Nutritionist));
const Bonuses = dynamic(() => import('@/components/landing/bonuses').then(mod => mod.Bonuses));
const ForWhom = dynamic(() => import('@/components/landing/for-whom').then(mod => mod.ForWhom));
const Testimonials = dynamic(() => import('@/components/landing/testimonials').then(mod => mod.Testimonials));
const Offer = dynamic(() => import('@/components/landing/offer').then(mod => mod.Offer));
const Guarantee = dynamic(() => import('@/components/landing/guarantee').then(mod => mod.Guarantee));
const Delivery = dynamic(() => import('@/components/landing/delivery').then(mod => mod.Delivery));
const FinalCta = dynamic(() => import('@/components/landing/final-cta').then(mod => mod.FinalCta));
const Footer = dynamic(() => import('@/components/landing/footer').then(mod => mod.Footer));

function Loading() {
  return <div className="w-full text-center p-8">Carregando...</div>;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<Loading />}>
          <BigIdea />
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
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
