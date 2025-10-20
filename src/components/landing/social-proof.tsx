import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

const benefits = [
  "Mais de 200 receitas funcionais e saborosas: combinações testadas e aprovadas para o dia a dia.",
  "Sugestões para cada momento do dia: café da manhã, lanche da tarde e pré/pós-treino.",
  "Opções doces e salgadas com ingredientes acessíveis: sem perder o sabor nem o foco nos resultados.",
  "Material prático e bonito: salve no celular e use sempre que quiser variar o cardápio.",
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
            <div className="w-full max-w-2xl">
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
          <h3 className="text-2xl font-headline font-bold mb-6 text-center">O que você recebe:</h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✅</span>
                <p className="text-muted-foreground">{benefit}</p>
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
