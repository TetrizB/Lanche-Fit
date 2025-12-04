import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Gift } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export function Offer() {
  const productImage = PlaceHolderImages.find(
    (img) => img.id === "product-ebook-cover"
  );
  return (
    <section id="offer" className="py-16 lg:py-24 scroll-mt-20 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto text-center p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden bg-card">
          {productImage && (
            <div className="mb-8">
              <Image
                src={productImage.imageUrl}
                alt={productImage.description}
                width={400}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
                data-ai-hint={productImage.imageHint}
              />
            </div>
          )}
          <CardHeader className="pt-0">
            <h2 className="text-3xl font-headline tracking-wider mb-4">
              Um Mimo Especial Para Você Neste Natal!
            </h2>
            <p className="text-xl font-semibold mb-2 text-primary uppercase">
              Oferta de Natal Exclusiva!
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Acesso completo ao Fast Fit <span className="line-through">(R$47)</span> + 3 Bônus <span className="line-through">(R$97)</span>. <br/> De <span className="line-through">R$144,00</span> por apenas:
            </p>
            <CardTitle className="text-5xl md:text-7xl font-headline font-bold">
              12x de R$1,99
            </CardTitle>
             <p className="text-sm text-muted-foreground mt-2">
              ou R$19,90 à vista
            </p>
          </CardHeader>
          <CardContent>
            <Badge
              variant="destructive"
              className="mb-8 text-base font-semibold uppercase"
            >
              A oferta acaba com o Natal!
            </Badge>
            <Link href="https://www.ggcheckout.com/checkout/v2/3Z4BhtZ41ngEPpeO9rC8" target="_blank" rel="noopener noreferrer">
              <Button className="cta-button text-xl px-12 py-8 w-full md:w-auto shadow-lg">
                <Gift className="mr-2" /> Quero Acesso Imediato por R$1,99/mês!
              </Button>
            </Link>
             <p className="text-sm text-muted-foreground mt-4 font-semibold">
              Menos de R$0,07 por dia para transformar sua alimentação!
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Pagamento 100% seguro</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4 uppercase">
              Acesso imediato no seu e-mail e WhatsApp.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
