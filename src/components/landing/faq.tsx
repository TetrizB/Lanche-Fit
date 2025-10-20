import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqItems = [
    {
      question: "Preciso saber cozinhar?",
      answer: "Não. Tudo é prático e explicado em passos curtos, com tempo real de preparo.",
    },
    {
      question: "Preciso de muitos ingredientes?",
      answer: "Não. A maioria das receitas usa até 3 itens comuns de geladeira.",
    },
    {
      question: "Funciona pra almoço e jantar?",
      answer: "Sim. São receitas adaptáveis pra qualquer refeição.",
    },
    {
      question: "Posso fazer no trabalho?",
      answer: "Sim. Várias opções são pensadas pra micro-ondas e preparo rápido.",
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias pra testar. Se não amar, seu dinheiro volta.",
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
  