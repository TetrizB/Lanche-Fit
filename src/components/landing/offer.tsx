import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
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
        <Card className="max-w-3xl mx-auto text-center p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
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
            <h2 className="text-3xl font-headline font-bold mb-4">
              FAST FIT: COMIDA BOA E LEVE EM 10 MINUTOS
            </h2>
            <p className="text-xl font-semibold mb-2 text-primary">
              Acesso completo e imediato
            </p>
            <p className="text-2xl text-muted-foreground mb-4">
              <span className="line-through">De R$129,00</span> por apenas:
            </p>
            <CardTitle className="text-5xl md:text-7xl font-headline font-bold">
              R$29,90
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge
              variant="destructive"
              className="mb-8 text-base font-semibold"
            >
              Oferta por tempo limitado!
            </Badge>
            <Link href="https://www.ggcheckout.com/checkout/v2/3Z4BhtZ41ngEPpeO9rC8" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-xl font-bold px-12 py-8 w-full md:w-auto transition-transform hover:scale-105 shadow-lg"
              >
                Quero comer bem sem sofrer!
              </Button>
            </Link>
            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Pagamento 100% seguro</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Acesso imediato no seu e-mail e WhatsApp.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
