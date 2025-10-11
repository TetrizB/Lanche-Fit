import { Weight, Clock, Coffee, Feather } from "lucide-react";

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
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">
            Este guia é para você que...
          </h2>
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-xl">
                <div className="bg-secondary rounded-full p-3">{item.icon}</div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
