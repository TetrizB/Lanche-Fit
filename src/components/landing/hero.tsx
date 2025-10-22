import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Background } from "../ui/background-components";

export function Hero() {
  return (
    <section className="relative w-full">
      <Background>
        <div className="container mx-auto px-4 text-foreground h-[80vh] min-h-[600px] flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-headline tracking-wider uppercase text-foreground mb-4">
              Fast Fit: Comida Boa e Leve em 10 Minutos
            </h1>
            <p className="text-lg md:text-xl mb-8 font-medium">
              Prepare refeições leves, rápidas e com gosto real — <span className="uppercase font-bold">sem castigo</span>. Sem dieta chata, sem marmita sem graça, sem fome. Apenas sabor e praticidade — mesmo que odeie salada.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/#offer">
                <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase">
                  Quero minhas receitas agora
                </Button>
              </Link>
              <Badge variant="secondary" className="uppercase">
                Acesso imediato + garantia de 7 dias
              </Badge>
            </div>
          </div>
        </div>
      </Background>
    </section>
  );
}
