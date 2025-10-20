import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Guarantee() {
  return (
    <section className="py-16 lg:py-24 bg-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex justify-center md:justify-end">
            <ShieldCheck className="w-24 h-24 text-primary" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-headline tracking-wider uppercase mb-4">
              Sua Satisfação ou Seu Dinheiro de Volta
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Teste por <span className="font-bold">7 dias</span> e se não gostar, devolvemos seu dinheiro na hora e
              você ainda fica com o produto! O risco é todo nosso.
            </p>
             <Link href="/#offer">
              <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105 uppercase">
                Quero minhas receitas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
