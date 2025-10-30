import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Salad, TestTube, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const bonuses = [
  {
    icon: <Salad className="w-10 h-10 text-primary" />,
    title: "100 Receitas Low Carb",
    description: "Para acelerar a queima de gordura com pratos deliciosos e de baixo carboidrato.",
    tag: "Grátis!",
    imageId: "low-carb-recipes",
  },
  {
    icon: <TestTube className="w-10 h-10 text-primary" />,
    title: "Mini Guia Detox 3 Dias",
    description: "Um plano rápido para desinchar e renovar sua energia em apenas 3 dias.",
    tag: "Grátis!",
    imageId: "sucos-detox",
  },
  {
    icon: <Trophy className="w-10 h-10 text-primary" />,
    title: "Desafio 7 Dias Fast Fit",
    description: "Um cronograma para você seguir e ver resultados visíveis na primeira semana.",
    tag: "Grátis!",
    imageId: "marmitas-fit",
  },
];

export function Bonuses() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-headline tracking-wider uppercase mb-4">
          E não é só isso! Leve 3 Bônus Exclusivos
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprando hoje o acesso ao Fast Fit, você recebe gratuitamente mais 3 materiais completos para turbinar seus resultados.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bonuses.map((bonus, index) => {
            const image = bonus.imageId ? PlaceHolderImages.find((img) => img.id === bonus.imageId) : null;
            return (
              <Card key={index} className="text-center shadow-lg overflow-hidden bg-card">
                 {image ? (
                  <div className="relative h-48 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                ) : (
                   <div className="mx-auto bg-background/50 rounded-full p-4 w-fit my-6">
                    {bonus.icon}
                  </div>
                )}
                <CardHeader className="pt-6">
                  <CardTitle className="font-headline text-3xl tracking-wide">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{bonus.description}</p>
                  <div className="inline-block px-4 py-1 text-sm font-bold rounded-full bg-primary text-primary-foreground uppercase">
                    {bonus.tag}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="mb-12 text-lg font-semibold">
          Garanta seus bônus e comece hoje mesmo a sua transformação!
        </p>
        <Link href="/#offer">
          <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase">
            Quero minhas receitas
          </Button>
        </Link>
      </div>
    </section>
  );
}
