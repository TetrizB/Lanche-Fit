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

const testimonials = PlaceHolderImages.filter(p => p.id.startsWith("carousel-"));

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
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        {testimonial.imageUrl && (
                          <Avatar className="w-20 h-20 mb-4">
                            <AvatarImage
                              src={testimonial.imageUrl}
                              alt={`Foto de ${testimonial.name}`}
                            />
                            <AvatarFallback>
                              {testimonial.name ? testimonial.name.charAt(0) : ''}
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
