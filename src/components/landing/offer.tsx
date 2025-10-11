import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export function Offer() {
  return (
    <section id="offer" className="py-16 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl font-semibold mb-2">Acesso completo e imediato por um preço especial</p>
          <h2 className="text-5xl md:text-6xl font-headline font-bold mb-4">
            Tudo isso por apenas R$29,90
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            <span className="line-through">De R$129,00</span> por apenas 12x de R$2,99 ou R$29,90 à vista. Acesso
            imediato no seu e-mail e WhatsApp.
          </p>
          <Button size="lg" className="text-xl font-bold px-12 py-8 w-full md:w-auto transition-transform hover:scale-105 shadow-lg">
            Quero minhas 200 receitas agora!
          </Button>
          <div className="mt-8 flex flex-col items-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Pagamento 100% seguro</span>
            </div>
            <p className="text-sm">Aceitamos: PIX, Cartão de Crédito, Boleto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
