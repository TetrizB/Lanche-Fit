import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Nutritionist() {
  const nutritionistImage = PlaceHolderImages.find(
    (img) => img.id === "laura-costa-portrait"
  );
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {nutritionistImage && (
            <div className="flex justify-center order-last md:order-first">
              <Image
                src={nutritionistImage.imageUrl}
                alt={nutritionistImage.description}
                width={400}
                height={400}
                className="rounded-full object-cover shadow-lg aspect-square"
                data-ai-hint={nutritionistImage.imageHint}
              />
            </div>
          )}
          <div className="text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-headline tracking-wider uppercase mb-4">
              Quem é a Nutricionista?
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Prazer, sou a Laura Costa.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Sou nutricionista funcional e, junto com a Chefe Bruna, criei este cardápio para mostrar que
              comer bem pode — e deve — ter sabor. Depois de anos atendendo
              pessoas que odiavam ‘comida de dieta’, resolvi provar que dá pra
              emagrecer comendo bem e <span className="uppercase font-bold">sem complicação</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
