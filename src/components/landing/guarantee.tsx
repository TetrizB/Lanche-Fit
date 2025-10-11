import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-16 lg:py-24 bg-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex justify-center md:justify-end">
            <ShieldCheck className="w-24 h-24 text-primary" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-headline font-bold mb-4">
              Sua Satisfação ou Seu Dinheiro de Volta
            </h2>
            <p className="text-lg text-muted-foreground">
              Teste por 7 dias sem compromisso. Se por qualquer motivo você não
              amar as receitas e a praticidade que elas trazem para sua vida,
              basta nos enviar um e-mail. Devolvemos 100% do seu dinheiro, sem
              perguntas e sem burocracia. E o melhor:{" "}
              <strong>você ainda fica com todo o material.</strong> O risco é
              todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
