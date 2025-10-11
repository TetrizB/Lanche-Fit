import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CakeSlice, Box, GlassWater } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const bonuses = [
  {
    icon: <CakeSlice className="w-10 h-10 text-primary" />,
    title: "200 Sobremesas Zero Açúcar",
    description: "Para matar a vontade de doce sem culpa!",
    tag: "Grátis!",
  },
  {
    icon: <Box className="w-10 h-10 text-primary" />,
    title: "30 Marmitas Fit para Congelar",
    description: "Planeje sua semana e economize tempo.",
    tag: "Grátis!",
  },
  {
    icon: <GlassWater className="w-10 h-10 text-primary" />,
    title: "60 Sucos Detox Saborosos",
    description: "Para desintoxicar e dar mais energia ao seu dia.",
    tag: "Grátis!",
  },
];

export function Bonuses() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-headline font-bold mb-4">
          E não é só isso! Leve 3 Bônus Exclusivos
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprando hoje o e-book "200 Cafés da Manhã de Nutri", você recebe gratuitamente mais 3 materiais completos.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                  {bonus.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{bonus.description}</p>
                <div className="inline-block px-4 py-1 text-sm font-bold rounded-full bg-primary text-primary-foreground">
                  {bonus.tag}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mb-12 text-lg font-semibold">
          Somando <span className="text-primary-foreground font-bold">R$73,00 em bônus</span> totalmente gratuitos — só hoje!
        </p>
        <Link href="#offer">
          <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
            Quero minhas receitas
          </Button>
        </Link>
      </div>
    </section>
  );
}
