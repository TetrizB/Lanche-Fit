import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-headline font-bold text-center mb-12">
          O que nossas alunas estão dizendo
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === testimonial.id
            );
            return (
              <Card key={testimonial.id} className="bg-background p-6 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    “{testimonial.quote}”
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
