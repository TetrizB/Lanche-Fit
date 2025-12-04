import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BigIdea() {
  const nutritionistImage = PlaceHolderImages.find(
    (img) => img.id === "laura-costa-smiling"
  );
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-headline tracking-wider mb-4 uppercase">
              A revolução da comida saudável (e gostosa de verdade!)
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Por anos, nos disseram que comida saudável era sinônimo de pratos sem graça e horas na cozinha. A culpa não é sua se você desistiu. O problema são os métodos complicados. É por isso que criamos o <strong>Método Sabor Leve</strong>: a revolução que combina ingredientes simples com técnicas de chef para criar pratos deliciosos e nutritivos em menos de 10 minutos. É a sua liberdade de comer bem sem sacrifícios.
            </p>
            <Link href="/#offer">
              <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase">
                Quero o Método Sabor Leve
              </Button>
            </Link>
          </div>
          {nutritionistImage && (
            <div className="flex justify-center">
              <Image
                src={nutritionistImage.imageUrl}
                alt={nutritionistImage.description}
                width={400}
                height={400}
                className="rounded-lg aspect-square object-cover shadow-lg"
                data-ai-hint={nutritionistImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
