import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Background } from "@/components/ui/background-components";

export default function ObrigadoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Background>
          <div className="container mx-auto px-4 text-foreground h-[80vh] min-h-[600px] flex items-center justify-center text-center">
            <div className="max-w-2xl mx-auto">
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
                <Link href="https://chat.whatsapp.com/your-group-link" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase w-full bg-green-500 hover:bg-green-600 text-white">
                    Entrar no Grupo VIP
                  </Button>
                </Link>
                 <p className="text-sm text-muted-foreground mt-4">
                    Nos vemos lá!
                </p>
              </div>
            </div>
          </div>
        </Background>
      </main>
      <Footer />
    </div>
  );
}