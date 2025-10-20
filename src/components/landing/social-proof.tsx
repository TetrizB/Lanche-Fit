import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const CheckIcon = ({ className }: { className?: string }) => (
    <svg 
        className={className}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M20 6 9 17l-5-5"/>
    </svg>
);


const benefits = [
  "200 RECEITAS RÁPIDAS PARA O DIA A DIA",
  "7 DIAS DE GARANTIA INCONDICIONAL",
  "1 ANO DE ACESSO COM ATUALIZAÇÕES",
];

const bonuses = [
  "BÔNUS: 200 SOBREMESAS ZERO AÇÚCAR",
  "BÔNUS: 30 MARMITAS FIT PARA CONGELAR",
  "BÔNUS: 60 SUCOS DETOX SABOROSOS",
];

export function SocialProof() {
  const image = PlaceHolderImages.find(
    (img) => img.id === "client-testimonials-banner"
  );
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        {image && (
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-xl">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={1024}
                height={576}
                className="rounded-lg shadow-lg w-full h-auto"
                data-ai-hint={image.imageHint}
              />
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto text-left mb-12">
          <h3 className="text-3xl lg:text-4xl font-headline font-bold mb-8 text-center uppercase">O que você recebe na hora:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4 bg-card shadow-md">
                  <div className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="font-semibold text-card-foreground">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="p-4 bg-accent shadow-md">
                     <div className="flex items-center gap-4">
                        <span className="text-primary font-bold text-2xl flex-shrink-0">+</span>
                        <p className="font-semibold text-accent-foreground">{bonus}</p>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Link href="/#offer">
            <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase">
              Quero minhas receitas
            </Button>
          </Link>
          <div className="flex items-center gap-2 font-semibold text-muted-foreground">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span>+500 mulheres aprovaram</span>
          </div>
        </div>
      </div>
    </section>
  );
}
