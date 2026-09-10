import Link from "next/link";
import Image from "next/image";
import { T } from "@/lib/language-context";
import footerLogo from "../../public/images/footer-logo.webp";

const NAV_LINKS = [
  { href: "#inicio", es: "Inicio", en: "Home" },
  { href: "#servicios", es: "Servicios", en: "Services" },
  { href: "#resultados", es: "Resultados", en: "Results" },
  { href: "#proceso", es: "Cómo trabajamos", en: "How we work" },
  { href: "#sobre-jmt", es: "Sobre JMT", en: "About JMT" },
  { href: "#contacto", es: "Contacto", en: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Image src={footerLogo} alt="JMT Painting LLC" className="footer-logo" />
          <p className="footer-tagline">
            <T es="Pintura residencial y comercial en Georgia." en="Residential and commercial painting in Georgia." />
          </p>
        </div>

        <nav className="footer-nav" aria-label="Enlaces del footer">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <T es={link.es} en={link.en} />
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <p>
            780 Heritage Pkwy
            <br />
            Lithia Springs, GA 30122
          </p>
          <p>
            <a href="tel:+17708644011">+1 (770) 864-4011</a>
          </p>
          <p className="footer-area">
            <T es="Área de servicio: Georgia" en="Service area: Georgia" />
          </p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © 2026 JMT Painting LLC. <T es="Todos los derechos reservados." en="All rights reserved." />
        </p>
      </div>
    </footer>
  );
}
