import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Background } from "../ui/background-components";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Clock, BookOpen } from "lucide-react";

export function Hero() {
  const ebookMockup = PlaceHolderImages.find(
    (img) => img.id === "product-ebook-cover"
  );
  return (
    <section className="relative w-full">
      <Background>
        <div className="container mx-auto px-4 h-[90vh] min-h-[700px] flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-headline tracking-wider uppercase text-foreground mb-4">
                Fast Fit: Comida Boa e Leve em 10 Minutos
              </h1>
              <p className="text-lg md:text-xl mb-8 font-medium">
                Prepare refeições leves, rápidas e com gosto real —{" "}
                <span className="uppercase font-bold">sem castigo</span>. Sem
                dieta chata, sem marmita sem graça, sem fome. Apenas sabor e
                praticidade — mesmo que odeie salada.
              </p>
              <div className="flex flex-col items-center md:items-start gap-4">
                <Link href="/#offer">
                  <Button
                    size="lg"
                    className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase"
                  >
                    Quero minhas receitas agora
                  </Button>
                </Link>
                <Badge variant="secondary" className="uppercase">
                  Acesso imediato + garantia de 7 dias
                </Badge>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                {ebookMockup && (
                  <Image
                    src={ebookMockup.imageUrl}
                    alt={ebookMockup.description}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-2xl"
                    data-ai-hint={ebookMockup.imageHint}
                  />
                )}
                <div className="absolute -top-5 -left-10 flex flex-col gap-3">
                   <Badge className="text-base font-bold uppercase backdrop-blur-sm bg-primary/80 border-2 border-primary-foreground/50 shadow-lg">
                     <BookOpen className="w-5 h-5 mr-2"/> +200 Receitas Rápidas
                  </Badge>
                   <Badge variant="destructive" className="text-base font-bold uppercase backdrop-blur-sm bg-secondary/80 border-2 border-primary-foreground/50 shadow-lg">
                     <Clock className="w-5 h-5 mr-2" /> Em até 10 minutos
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Background>
    </section>
  );
}
