import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

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
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline tracking-wider uppercase mb-4">
            Comece a transformar seu corpo e sua rotina hoje
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Receitas criadas por uma nutricionista — com sabor, saúde e praticidade em <span className="font-bold">10 minutos</span>.
          </p>
          <Link href="https://www.ggcheckout.com/checkout/v2/3Z4BhtZ41ngEPpeO9rC8" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-xl font-bold px-12 py-8 w-full md:w-auto transition-transform hover:scale-105 shadow-lg uppercase">
              Sim, quero meu acesso agora!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
