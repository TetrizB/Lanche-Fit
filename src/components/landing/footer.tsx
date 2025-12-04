import Link from "next/link";
import { Instagram, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4 text-center text-secondary-foreground">
        <div className="flex justify-center gap-4 mb-4">
          <Link href="mailto:suporte@nutrimorning.com" className="hover:text-secondary-foreground/80">
            E-mail de Suporte
          </Link>
          {/* <Link href="#" className="hover:text-secondary-foreground/80">
            Termos de Uso
          </Link>
          <Link href="#" className="hover:text-secondary-foreground/80">
            Política de Privacidade
          </Link> */}
        </div>
        <p>© {new Date().getFullYear()} — Laura Costa Nutrição Funcional</p>
        <div className="mt-4 flex flex-col items-center gap-4">
            <Link 
                href="https://www.instagram.com/chefebrunalopes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-lg font-bold hover:text-secondary-foreground/80 transition-colors"
            >
                <Instagram className="w-6 h-6" />
                <span>@chefebrunalopes</span>
            </Link>
            <p className="text-sm -mt-3">+10000 seguidoras</p>
            <Link 
                href="https://wa.me/5569999996717?text=Oi!%20Tenho%20uma%20dúvida%20sobre%20o%20Fast%20Fit..."
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-lg font-bold hover:text-secondary-foreground/80 transition-colors bg-green-500/20 px-4 py-2 rounded-full"
            >
                <MessageSquare className="w-6 h-6" />
                <span>Dúvidas? Fale no WhatsApp</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}
