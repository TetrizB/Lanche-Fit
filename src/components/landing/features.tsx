import {
  Heart,
  Zap,
  Smile,
  Grape,
  CookingPot,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: <Smile className="w-8 h-8 text-primary" />,
    text: "Comer com prazer e sem culpa",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    text: "Se sentir mais leve e com energia",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    text: "Emagrecer sem dieta maluca",
  },
  {
    icon: <Grape className="w-8 h-8 text-primary" />,
    text: "Refeições nutritivas e baratas",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-primary" />,
    text: "Ingredientes simples que você tem em casa",
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
          O que é o FAST FIT?
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
