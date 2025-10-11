import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function BigIdea() {
  const nutritionistImage = PlaceHolderImages.find(
    (img) => img.id === "maria-aguiar-smiling"
  );
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-headline font-bold mb-4">
              A revolução do café da manhã saudável (sem gosto de dieta!)
            </h2>
            <p className="text-lg text-muted-foreground">
              Coma bem e sinta-se leve com receitas que unem nutrição e prazer —
              feitas em até 15 minutos. Chega de sofrer com dietas restritivas.
              É hora de transformar sua relação com a comida, começando pela
              refeição mais importante do dia.
            </p>
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
