import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import { Background } from "@/components/ui/background-components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ObrigadoPage() {
  const upsellImage = PlaceHolderImages.find((img) => img.id === "upsell-desafio-30-dias");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Background>
          <div className="container mx-auto px-4 py-24 text-foreground text-center">
            <div className="max-w-2xl mx-auto mb-16">
              <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-headline tracking-wider uppercase text-foreground mb-4">
                Tudo Certo!
              </h1>
              <p className="text-lg md:text-xl mb-8 font-medium">
                Seu acesso ao <span className="font-bold">Fast Fit</span> e aos bônus foi enviado para o seu e-mail e WhatsApp.
              </p>
              <div className="p-8 bg-card rounded-lg shadow-lg text-card-foreground">
                 <p className="text-lg md:text-xl mb-4 font-semibold">
                    Clique no botão abaixo para entrar no nosso grupo VIP de alunas no WhatsApp e receber dicas exclusivas:
                </p>
                <Link href="https://chat.whatsapp.com/FGqCHHUm2YkFkNmEpUI7aa?mode=wwt" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase w-full bg-green-500 hover:bg-green-600 text-white">
                    Entrar no Grupo VIP
                  </Button>
                </Link>
                 <p className="text-sm text-muted-foreground mt-4">
                    Nos vemos lá!
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="text-center p-6 sm:p-8 lg:p-12 shadow-2xl bg-card border-primary border-2">
                <CardHeader>
                  <p className="text-primary font-bold uppercase tracking-widest">Uma oferta especial para você</p>
                  <CardTitle className="text-4xl md:text-5xl font-headline tracking-wider uppercase text-foreground mt-2 mb-4">
                    Desafio 30 Dias: Corpo Leve e Renovado
                  </CardTitle>
                   <p className="text-lg text-muted-foreground mb-6">
                    Acelere seus resultados com nosso plano alimentar exclusivo de 30 dias. Um cardápio completo, desenhado pela nutri para desintoxicar, queimar gordura e renovar sua energia de vez.
                  </p>
                </CardHeader>
                <CardContent>
                  {upsellImage && (
                    <div className="mb-8">
                      <Image
                        src={upsellImage.imageUrl}
                        alt={upsellImage.description}
                        width={300}
                        height={300}
                        className="rounded-lg shadow-lg mx-auto"
                        data-ai-hint={upsellImage.imageHint}
                      />
                    </div>
                  )}
                  <p className="text-2xl text-muted-foreground mb-2">
                    De <span className="line-through">R$97,00</span> por apenas:
                  </p>
                  <p className="text-5xl font-headline font-bold text-primary mb-6">R$29,90</p>
                  <Link href="https://www.ggcheckout.com/checkout/v2/Yo0FV073WpPuvP72YMxT" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="text-xl font-bold px-12 py-8 w-full md:w-auto transition-transform hover:scale-105 shadow-lg uppercase">
                      Sim, quero acelerar meus resultados!
                    </Button>
                  </Link>
                   <p className="text-sm text-muted-foreground mt-4">
                    Clique aqui e adicione ao seu pedido com um <span className="font-bold">super desconto</span>. Oferta única!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Background>
      </main>
      <Footer />
    </div>
  );
}
