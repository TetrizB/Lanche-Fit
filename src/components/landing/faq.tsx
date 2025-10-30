import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqItems = [
    {
      question: "Preciso ter alguma experiência na cozinha?",
      answer: "Absolutamente não! O Fast Fit foi criado para iniciantes. As receitas são simples, diretas e com um passo a passo claro que qualquer pessoa consegue seguir, mesmo que nunca tenha fritado um ovo.",
    },
    {
      question: "Os ingredientes são caros ou difíceis de encontrar?",
      answer: "De forma alguma. A base do Fast Fit são ingredientes acessíveis, que você encontra em qualquer supermercado. A ideia é economizar tempo e dinheiro, não o contrário.",
    },
    {
      question: "Funciona para quem mora sozinho ou tem família?",
      answer: "Sim, é perfeito para os dois cenários! As receitas são fáceis de adaptar. Se você mora sozinho, terá refeições rápidas e sem desperdício. Se tem família, pode simplesmente dobrar as quantidades para servir todo mundo.",
    },
    {
      question: "As receitas servem para almoço, jantar e lanches?",
      answer: "Sim! Você encontrará opções para todas as refeições do dia: café da manhã, almoço, jantar e lanches práticos para levar na bolsa. É um guia completo para sua rotina.",
    },
    {
      question: "Como funciona o acesso ao material?",
      answer: "O acesso é imediato. Assim que seu pagamento for confirmado, você receberá um e-mail e uma mensagem no WhatsApp com os links para baixar todo o material. Simples e rápido.",
    },
    {
      question: "E se eu não gostar? Qual é a garantia?",
      answer: "Seu risco é zero. Você tem 7 dias de garantia incondicional. Se por qualquer motivo você não amar as receitas, basta nos enviar um e-mail e nós devolvemos 100% do seu dinheiro, sem perguntas.",
    },
  ];
  
  export function Faq() {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-headline tracking-wider uppercase mb-8">
              ❓ Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full text-left">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }