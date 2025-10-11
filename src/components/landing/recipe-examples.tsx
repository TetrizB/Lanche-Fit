import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recipes = [
  {
    id: "panqueca-fit-banana",
    name: "Panqueca Fit de Banana",
    time: "7 min",
    calories: "183 cal",
  },
  {
    id: "pao-cremoso-gratinado",
    name: "Pão Cremoso Gratinado",
    time: "8 min",
    calories: "170 cal",
  },
  {
    id: "shake-detox-energizante",
    name: "Shake Detox Energizante",
    time: "6 min",
    calories: "120 cal",
  },
  {
    id: "brownie-frigideira",
    name: "Brownie de Frigideira",
    time: "10 min",
    calories: "176 cal",
  },
];

export function RecipeExamples() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-headline font-bold text-center mb-12">
          Receitas rápidas, leves e irresistíveis
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => {
            const image = PlaceHolderImages.find((img) => img.id === recipe.id);
            return (
              <Card key={recipe.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={recipe.name}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{recipe.name}</CardTitle>
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
      </div>
    </section>
  );
}
