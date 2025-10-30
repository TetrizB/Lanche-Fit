import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqItems = [
    {
      question: "Preciso saber cozinhar?",
      answer: "Não. Tudo é prático e explicado em passos curtos, com tempo real de preparo. As receitas são para iniciantes.",
    },
    {
      question: "Preciso de ingredientes caros?",
      answer: "Não. A maioria das receitas usa ingredientes simples e baratos que você já tem em casa ou encontra fácil.",
    },
    {
      question: "Funciona pra almoço e jantar?",
      answer: "Sim! São receitas versáteis para qualquer refeição do seu dia, do café da manhã ao jantar.",
    },
    {
      question: "Como recebo o acesso?",
      answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá tudo no seu e-mail e também via WhatsApp.",
    },
    {
      question: "E se eu não gostar?",
      answer: "Risco zero! Você tem 7 dias para testar. Se não amar, é só pedir o reembolso e devolvemos 100% do seu dinheiro.",
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
  