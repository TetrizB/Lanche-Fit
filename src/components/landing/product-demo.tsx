"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProductDemo() {
  const [showVideo, setShowVideo] = useState(false);
  const videoCoverImage = PlaceHolderImages.find(
    (img) => img.id === "hero-image"
  );

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-headline tracking-wider uppercase mb-4">
          Veja o Fast Fit por Dentro
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Descubra em menos de 1 minuto como o Fast Fit vai transformar sua
          rotina na cozinha.
        </p>
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer"
            style={{ paddingBottom: "56.25%" }}
            onClick={() => setShowVideo(true)}
          >
            {showVideo ? (
              <iframe
                src="https://www.youtube.com/embed/FyTuJUhWFNI?autoplay=1&rel=0&showinfo=0&controls=0"
                title="Demonstração Fast Fit"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            ) : (
              <>
                {videoCoverImage && (
                  <Image
                    src={videoCoverImage.imageUrl}
                    alt="Capa do vídeo demonstrativo"
                    fill
                    className="object-cover"
                    data-ai-hint={videoCoverImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <PlayCircle className="w-24 h-24 text-white/80 hover:text-white transition-colors" />
                </div>
                <div className="absolute bottom-4 left-4 text-left">
                  <p className="text-white font-bold text-xl drop-shadow-md">
                    Clique para assistir
                  </p>
                  <p className="text-white/90 text-sm drop-shadow-md">
                    Dê o play e veja como funciona.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
