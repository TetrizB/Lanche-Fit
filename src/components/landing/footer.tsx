import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4 text-center text-secondary-foreground">
        <div className="flex justify-center gap-4 mb-4">
          <Link href="mailto:suporte@nutrimorning.com" className="hover:text-secondary-foreground/80">
            E-mail de Suporte
          </Link>
          <Link href="#" className="hover:text-secondary-foreground/80">
            Termos de Uso
          </Link>
          <Link href="#" className="hover:text-secondary-foreground/80">
            Política de Privacidade
          </Link>
        </div>
        <p>© {new Date().getFullYear()} — Laura Costa Nutrição Funcional</p>
        <div className="mt-4">
            <Link 
                href="https://www.instagram.com/chefebrunalopes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-lg font-bold hover:text-secondary-foreground/80 transition-colors"
            >
                <Instagram className="w-6 h-6" />
                <span>@chefebrunalopes</span>
            </Link>
            <p className="text-sm mt-1">+3000 seguidoras</p>
        </div>
      </div>
    </footer>
  );
}
