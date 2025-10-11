import { Weight, Clock, Coffee, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const items = [
  {
    icon: <Weight className="w-6 h-6 text-primary" />,
    text: "Quem quer emagrecer sem sofrimento",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    text: "Quem não tem tempo para preparar receitas",
  },
  {
    icon: <Coffee className="w-6 h-6 text-primary" />,
    text: "Quem está cansada do mesmo café da manhã",
  },
  {
    icon: <Feather className="w-6 h-6 text-primary" />,
    text: "Quem quer se sentir mais leve e disposta",
  },
];

export function ForWhom() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">
            Este guia é para você que...
          </h2>
          <ul className="space-y-6 mb-12 text-left">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-xl">
                <div className="bg-secondary rounded-full p-3">{item.icon}</div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
           <Link href="https://www.ggcheckout.com/checkout/v2/3Z4BhtZ41ngEPpeO9rC8">
              <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
                Quero minhas receitas
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
