import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export function Offer() {
  return (
    <section id="offer" className="py-16 lg:py-24 scroll-mt-20 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto text-center p-6 sm:p-8 lg:p-12 shadow-2xl">
          <CardHeader>
            <p className="text-xl font-semibold mb-2 text-primary">Acesso completo e imediato</p>
            <CardTitle className="text-5xl md:text-6xl font-headline font-bold">
              Tudo isso por apenas R$29,90
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-muted-foreground mb-8">
              <span className="line-through">De R$129,00</span> por apenas 12x de R$2,99 ou R$29,90 à vista. Acesso
              imediato no seu e-mail e WhatsApp.
            </p>
            <Button size="lg" className="text-xl font-bold px-12 py-8 w-full md:w-auto transition-transform hover:scale-105 shadow-lg">
              Quero minhas 200 receitas agora!
            </Button>
            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Pagamento 100% seguro</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
