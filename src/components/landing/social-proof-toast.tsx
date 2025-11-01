"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

const buyers = [
    { name: "Maria C.", location: "São Paulo, SP" },
    { name: "Juliana P.", location: "Rio de Janeiro, RJ" },
    { name: "Fernanda S.", location: "Belo Horizonte, MG" },
    { name: "Carla M.", location: "Curitiba, PR" },
    { name: "Ana L.", location: "Fortaleza, CE" },
    { name: "Patrícia A.", location: "Salvador, BA" },
    { name: "Camila T.", location: "Brasília, DF" },
    { name: "Roberta F.", location: "Porto Alegre, RS" },
    { name: "Beatriz O.", location: "Recife, PE" },
    { name: "Luiza G.", location: "Goiânia, GO" },
    { name: "Mariana B.", location: "Florianópolis, SC" },
    { name: "Sofia R.", location: "Vitória, ES" },
    { name: "Cláudia N.", location: "Belém, PA" },
    { name: "Letícia V.", location: "Manaus, AM" },
    { name: "Gabriela D.", location: "Natal, RN" },
];

function getRandomBuyer() {
  return buyers[Math.floor(Math.random() * buyers.length)];
}

export function SocialProofToast() {
  const { toast } = useToast();

  useEffect(() => {
    const showRandomToast = () => {
      const buyer = getRandomBuyer();
      const timeAgo = Math.floor(Math.random() * 59) + 1; // 1 to 59 seconds

      toast({
        description: (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-full">
              <ShoppingCart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold">{buyer.name} de {buyer.location}</p>
              <p className="text-sm text-muted-foreground">
                Acabou de garantir o Fast Fit!
              </p>
              <p className="text-xs text-muted-foreground/80 mt-1">
                há {timeAgo} segundos
              </p>
            </div>
          </div>
        ),
      });
    };

    // Show the first toast after a short delay
    const initialTimeout = setTimeout(showRandomToast, 5000);

    // Then show a toast every 10 seconds
    const interval = setInterval(showRandomToast, 10000);

    return () => {
        clearTimeout(initialTimeout);
        clearInterval(interval);
    }
  }, [toast]);

  return null;
}
