import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const recipes = [
  {
    id: "panqueca-fit-banana",
    name: "Frango com Crosta de Parmesão",
    time: "10 min",
    calories: "320 cal",
  },
  {
    id: "pao-cremoso-gratinado",
    name: "Salmão Grelhado com Brócolis",
    time: "8 min",
    calories: "380 cal",
  },
  {
    id: "shake-detox-energizante",
    name: "Macarrão de Abobrinha à Bolonhesa",
    time: "12 min",
    calories: "280 cal",
  },
  {
    id: "brownie-frigideira",
    name: "Pizza de Frigideira Fit",
    time: "7 min",
    calories: "250 cal",
  },
];

export function RecipeExamples() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-headline tracking-wider uppercase text-center mb-12">
          Refeições rápidas, leves e irresistíveis
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {recipes.map((recipe) => {
            const image = PlaceHolderImages.find((img) => img.id === recipe.id);
            return (
              <Card key={recipe.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {image && image.imageUrl && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={recipe.name}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl tracking-wide">{recipe.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <Badge variant="outline">{recipe.time}</Badge>
                    <Badge variant="outline">{recipe.calories}</Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
