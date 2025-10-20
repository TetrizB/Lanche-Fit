import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

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
          <div className="mb-8 flex justify-center">
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

        <div className="max-w-3xl mx-auto text-left mb-12">
          <h3 className="text-2xl font-headline font-bold mb-6 text-center uppercase">O que você recebe na hora:</h3>
          <ul className="space-y-4 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✅</span>
                <p className="text-muted-foreground font-semibold">{benefit}</p>
              </li>
            ))}
          </ul>
           <ul className="space-y-4">
            {bonuses.map((bonus, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">➕</span>
                <p className="text-muted-foreground">{bonus}</p>
              </li>
            ))}
          </ul>
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
