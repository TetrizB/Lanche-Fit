import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Gift } from "lucide-react";

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
          <h2 className="text-4xl md:text-6xl font-headline tracking-wider mb-4">
            Comece a brilhar hoje mesmo!
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Receitas com sabor, saúde e a praticidade que você merece. Tudo em <span className="font-bold">10 minutos</span>.
          </p>
          <Link href="https://www.ggcheckout.com/checkout/v2/3Z4BhtZ41ngEPpeO9rC8" target="_blank" rel="noopener noreferrer">
            <Button className="cta-button text-xl px-12 py-8 w-full md:w-auto shadow-lg">
              <Gift className="mr-2" /> Sim, Quero Acesso Imediato por R$1,99/mês!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
