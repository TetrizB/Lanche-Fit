import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

export function SocialProof() {
  const image = PlaceHolderImages.find(
    (img) => img.id === "client-testimonials-banner"
  );
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        {image && (
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-4xl">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={1024}
                height={576}
                className="rounded-lg shadow-lg w-full h-auto"
                data-ai-hint={image.imageHint}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col items-center gap-4">
          <Link href="/#offer">
            <Button size="lg" className="text-lg font-semibold px-8 py-6 transition-transform hover:scale-105">
              Quero minhas receitas
            </Button>
          </Link>
          <div className="flex items-center gap-2 font-semibold text-muted-foreground">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span>+500 mulheres aprovaram</span>
          </div>
        </div>
      </div>
    </section>
  );
}
