import { Briefcase, User, UtensilsCrossed, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const items = [
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    text: "Pra quem trabalha o dia todo e não quer depender de delivery.",
  },
  {
    icon: <User className="w-6 h-6 text-primary" />,
    text: "Pra quem mora sozinho e odeia lavar louça.",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6 text-primary" />,
    text: "Pra quem quer comer bem sem virar refém de cozinha gourmet.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    text: "Pra quem tem fome e pouco tempo pra enrolação.",
  },
];

export function ForWhom() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">
            Pra quem é:
          </h2>
          <ul className="space-y-6 mb-12 text-left">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-xl">
                <div className="bg-secondary rounded-full p-3">{item.icon}</div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
           <Link href="/#offer">
              <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
                Quero minhas receitas
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
