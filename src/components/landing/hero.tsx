import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
      <div className="relative container mx-auto px-4 z-10 text-foreground">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground mb-4 inline-block p-2 rounded-md bg-background/70 dark:bg-background/50">
            Transforme suas manhãs com 200 cafés da manhã saudáveis (e
            deliciosos de verdade)
          </h1>
          <p className="text-lg md:text-xl mb-8 p-2 rounded-md bg-background/70 dark:bg-background/50 font-medium">
            Receitas criadas por uma nutricionista funcional para emagrecer,
            ganhar energia e saborear cada manhã.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href="/#offer">
              <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
                Quero minhas receitas agora
              </Button>
            </Link>
            <Badge variant="secondary" className="bg-secondary/80 backdrop-blur-sm">
              Acesso imediato + garantia de 7 dias
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
