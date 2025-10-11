import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    id: "testimonial-juliana",
    name: "Juliana, 41 anos",
    quote: "Em 7 dias, meu corpo desinchou e minha energia aumentou. As receitas são deliciosas e super fáceis de fazer, nem parece que estou de dieta!",
  },
  {
    id: "testimonial-carla",
    name: "Carla, 29 anos",
    quote: "Nunca imaginei que uma pizza de frigideira pudesse ser tão leve! Estou amando a variedade e a praticidade. Finalmente sinto prazer em tomar café da manhã.",
  },
  {
    id: "testimonial-mariana",
    name: "Mariana, 35 anos",
    quote: "Finalmente uma forma de comer saudável que não é chata! As receitas são criativas e me ajudaram a manter o foco no meu objetivo.",
  },
];

export function Testimonials() {
   const instagramCommentsImage = PlaceHolderImages.find(
    (img) => img.id === "instagram-comments"
  );
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-headline font-bold text-center mb-12">
          O que nossas alunas estão dizendo
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12 items-start">
          {instagramCommentsImage && (
             <Card className="bg-background p-2 shadow-lg md:col-span-2 lg:col-span-1 lg:order-last">
                <Image
                  src={instagramCommentsImage.imageUrl}
                  alt={instagramCommentsImage.description}
                  width={300}
                  height={600}
                  className="rounded-md w-full object-contain"
                  data-ai-hint={instagramCommentsImage.imageHint}
                />
              </Card>
          )}
          <div className="grid md:grid-cols-1 lg:col-span-3 gap-8 content-start">
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === testimonial.id
              );
              return (
                <Card key={testimonial.id} className="bg-background p-6 shadow-lg h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                    </div>
                    <p className="text-muted-foreground text-lg text-left">
                      “{testimonial.quote}”
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <Link href="#offer">
          <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
            Quero minhas receitas
          </Button>
        </Link>
      </div>
    </section>
  );
}
