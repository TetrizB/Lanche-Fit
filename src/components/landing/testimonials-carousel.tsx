"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const testimonials = [
  {
    id: "carousel-juliana",
    name: "Juliana M.",
    handle: "@ju.saudeleve",
    quote:
      "“Nunca imaginei que fosse conseguir manter uma alimentação saudável por tanto tempo! As receitas são rápidas, gostosas e práticas. Uso todos os dias!”",
    emoji: "🍎",
  },
  {
    id: "carousel-fernanda",
    name: "Fernanda C.",
    handle: "@fervida.fit",
    quote:
      "“Perdi 5kg em 2 meses sem passar fome e ainda descobri novos lanches que amo. Vale cada centavo!”",
  },
  {
    id: "carousel-camila",
    name: "Camila P.",
    handle: "@camipranutri",
    quote:
      "“Eu achava que lanche saudável era sem graça… até conhecer esse e-book. Agora até meu marido pede as receitas!”",
    emoji: "🥑",
  },
  {
    id: "carousel-roberta",
    name: "Roberta S.",
    handle: "@robertaequilibrio",
    quote:
      "“A variedade é absurda! Sempre que bate vontade de doce, abro o PDF e escolho uma opção sem culpa.”",
  },
  {
    id: "carousel-aline",
    name: "Dra. Aline T.",
    handle: "@nutrialine.tf",
    quote:
      "“Sou nutricionista e fiquei impressionada com a qualidade e equilíbrio das receitas. Tudo muito bem pensado!”",
    emoji: "✨",
  },
  {
    id: "carousel-patricia",
    name: "Patrícia V.",
    handle: "@patysaudaveloficial",
    quote:
      "“Eu vivia sem ideia do que comer entre as refeições. Agora tenho mais energia e não caio mais nas tentações do fast food.”",
  },
  {
    id: "carousel-leticia",
    name: "Letícia A.",
    handle: "@leatualfit",
    quote:
      "“Adorei a forma como está organizado, com fotos e opções por tipo de lanche. Já virou meu guia de bolso!”",
  },
  {
    id: "carousel-gabriela",
    name: "Gabriela F.",
    handle: "@gabifuncional_vida",
    quote:
      "“Não é só um livro de receitas — é um estilo de vida mais leve e delicioso. Recomendo demais!”",
  },
  {
    id: "carousel-mariana",
    name: "Mariana D.",
    handle: "@mari.comerbem",
    quote:
      "“Comecei a testar as receitas com minhas filhas e elas amaram! Finalmente algo saudável que toda a família aprova.”",
  },
  {
    id: "carousel-claudia",
    name: "Cláudia R.",
    handle: "@claudiacomsaude",
    quote:
      "“Comprei achando que ia usar pouco… hoje é meu material mais usado. E o atendimento foi excelente!”",
  },
];

export function TestimonialsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 lg:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === testimonial.id
              );
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        {image && (
                          <Avatar className="w-20 h-20 mb-4">
                            <AvatarImage
                              src={image.imageUrl}
                              alt={`Foto de ${testimonial.name}`}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <p className="mb-4 font-medium text-muted-foreground">
                          {testimonial.quote}
                        </p>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.handle}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
