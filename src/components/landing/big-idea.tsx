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
            <h2 className="text-4xl font-headline font-bold mb-4">
              A revolução da comida saudável (e gostosa de verdade!)
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Coma bem sem abrir mão do sabor com refeições feitas em até 10 minutos. Chega de sofrer com dietas restritivas e comida sem graça. É hora de transformar sua relação com a alimentação, comendo de forma prática, leve e prazerosa todos os dias.
            </p>
            <Link href="/#offer">
              <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
                Quero minhas receitas
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
