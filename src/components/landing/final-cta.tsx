import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function FinalCta() {
  const bgImage = PlaceHolderImages.find(
    (img) => img.id === "final-cta-background"
  );

  return (
    <section className="relative py-20 lg:py-32 text-center">
       {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-secondary/80 dark:bg-background/80" />
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Comece amanhã com o café da manhã perfeito
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            200 receitas criadas por uma nutricionista — com sabor, saúde e
            praticidade.
          </p>
          <Button size="lg" className="text-xl font-bold px-12 py-8 w-full md:w-auto transition-transform hover:scale-105 shadow-lg">
            Sim, quero meu acesso agora!
          </Button>
        </div>
      </div>
    </section>
  );
}
