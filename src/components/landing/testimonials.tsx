import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    id: "testimonial-juliana",
    name: "MARI",
    quote: "Em 7 dias, meu corpo desinchou e minha energia aumentou. As receitas são deliciosas e super fáceis de fazer, nem parece que estou de dieta!",
  },
  {
    id: "testimonial-carla",
    name: "Juliana M.",
    quote: "⭐⭐⭐⭐⭐ “Salvou meu almoço várias vezes!” Trabalho o dia todo e quase sempre acabava pedindo delivery… Agora em 5 min tenho um prato quente e delicioso. Parece mágica! 🍳🔥",
  },
];

export function Testimonials() {
   const instagramCommentsImage = PlaceHolderImages.find(
    (img) => img.id === "instagram-comments"
  );
  const secondTestimonialImage = PlaceHolderImages.find(
    (img) => img.id === "testimonial-image-2"
  );

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-headline tracking-wider uppercase text-center mb-12">
          O que nossas alunas estão dizendo
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 items-start">
          {instagramCommentsImage && (
             <Card className="bg-card p-2 shadow-lg">
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

          <div className="space-y-8">
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === testimonial.id
              );
              return (
                <Card key={testimonial.id} className="bg-card p-6 shadow-lg h-full">
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

          {secondTestimonialImage && (
             <Card className="bg-card p-2 shadow-lg">
                <Image
                  src={secondTestimonialImage.imageUrl}
                  alt={secondTestimonialImage.description}
                  width={300}
                  height={600}
                  className="rounded-md w-full object-contain"
                  data-ai-hint={secondTestimonialImage.imageHint}
                />
              </Card>
          )}
        </div>
        <Link href="/#offer">
          <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase">
            Quero minhas receitas
          </Button>
        </Link>
      </div>
    </section>
  );
}
