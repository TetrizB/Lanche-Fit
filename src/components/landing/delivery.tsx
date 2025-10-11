import { Mail, Smartphone, Printer, RefreshCw, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const items = [
  { icon: <Mail className="w-8 h-8 text-primary" />, text: "Receba no e-mail e WhatsApp" },
  { icon: <Smartphone className="w-8 h-8 text-primary" />, text: "Veja no celular, tablet ou computador" },
  { icon: <Printer className="w-8 h-8 text-primary" />, text: "Pode imprimir se preferir" },
  { icon: <RefreshCw className="w-8 h-8 text-primary" />, text: "Atualizações mensais incluídas" },
  { icon: <MessageSquare className="w-8 h-8 text-primary" />, text: "Suporte direto com a equipe" },
];

export function Delivery() {
    const image = PlaceHolderImages.find(
    (img) => img.id === "delivery-section-image"
  );
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
         {image && (
          <div className="mb-12">
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={800}
              height={200}
              className="rounded-lg shadow-lg mx-auto w-full max-w-4xl object-cover"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <h2 className="text-4xl font-headline font-bold text-center mb-12">
          Acesso Imediato e Suporte Garantido
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center max-w-5xl mx-auto mb-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-secondary rounded-full p-4 mb-4">
                {item.icon}
              </div>
              <p className="font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
         <Link href="https://www.ggcheckout.com/checkout/v2/3Z4BhtZ41ngEPpeO9rC8">
          <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
            Quero minhas receitas
          </Button>
        </Link>
      </div>
    </section>
  );
}
