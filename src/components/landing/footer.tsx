import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center gap-4 mb-4">
          <Link href="mailto:suporte@nutrimorning.com" className="hover:text-foreground">
            E-mail de Suporte
          </Link>
          <Link href="#" className="hover:text-foreground">
            Termos de Uso
          </Link>
          <Link href="#" className="hover:text-foreground">
            Política de Privacidade
          </Link>
        </div>
        <p>© {new Date().getFullYear()} — Maria Aguiar Nutrição Funcional</p>
      </div>
    </footer>
  );
}
