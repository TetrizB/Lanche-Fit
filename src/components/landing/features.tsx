import {
  Flame,
  Clock,
  Sparkles,
  Grape,
  CookingPot,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    text: "Preparo em até 10 minutos",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    text: "Ingredientes fáceis de achar",
  },
  {
    icon: <Flame className="w-8 h-8 text-primary" />,
    text: "Receitas com até 400 calorias",
  },
  {
    icon: <Grape className="w-8 h-8 text-primary" />,
    text: "Ricas em nutrientes e fibras",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-primary" />,
    text: "Sabor de comida de verdade",
  },
  {
    icon: <CookingPot className="w-8 h-8 text-primary" />,
    text: "Acesso digital e prático",
  },
];

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-headline tracking-wider uppercase mb-12 text-secondary-foreground">
          O Que Você Vai Encontrar no Fast Fit
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                {feature.icon}
              </div>
              <p className="font-semibold text-secondary-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
        <Link href="/#offer">
          <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase">
            Quero ter uma vida mais saudável
          </Button>
        </Link>
      </div>
    </section>
  );
}
