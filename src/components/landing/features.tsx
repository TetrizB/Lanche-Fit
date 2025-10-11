import {
  Flame,
  Clock,
  Sparkles,
  Grape,
  Blend,
  CookingPot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: <Flame className="w-8 h-8 text-primary-foreground" />,
    text: "Receitas de até 350 calorias",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary-foreground" />,
    text: "Ingredientes simples",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-foreground" />,
    text: "Preparo em até 15 minutos",
  },
  {
    icon: <Grape className="w-8 h-8 text-primary-foreground" />,
    text: "Alta em proteínas e vitaminas",
  },
  {
    icon: <Blend className="w-8 h-8 text-primary-foreground" />,
    text: "Feitas com liquidificador e frigideira",
  },
  {
    icon: <CookingPot className="w-8 h-8 text-primary-foreground" />,
    text: "Acesso digital prático e ilustrado",
  },
];

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-headline font-bold mb-12">
          O Que Você Vai Encontrar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-primary rounded-full p-4 mb-4">
                {feature.icon}
              </div>
              <p className="font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>
        <Link href="https://www.ggcheckout.com/checkout/v2/3Z4BhtZ41ngEPpeO9rC8">
          <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
            Quero minhas receitas
          </Button>
        </Link>
      </div>
    </section>
  );
}
