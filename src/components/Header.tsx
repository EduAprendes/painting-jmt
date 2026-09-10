"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { T, useLanguage } from "@/lib/language-context";
import logoMark from "../../public/images/logo-mark.webp";

const NAV_LINKS = [
  { href: "#inicio", es: "Inicio", en: "Home" },
  { href: "#servicios", es: "Servicios", en: "Services" },
  { href: "#resultados", es: "Resultados", en: "Results" },
  { href: "#proceso", es: "Cómo trabajamos", en: "How we work" },
  { href: "#sobre-jmt", es: "Sobre JMT", en: "About JMT" },
  { href: "#contacto", es: "Contacto", en: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="siteHeader">
      <div className="wrap header-inner">
        <Link href="#inicio" className="brand" aria-label="JMT Painting LLC — Inicio">
          <Image src={logoMark} alt="JMT Painting LLC" className="brand-mark" width={56} height={35} />
          <span className="brand-word">
            <span className="brand-word-main">JMT</span>
            <span className="brand-word-sub">Painting</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <T es={link.es} en={link.en} />
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="lang-toggle"
            id="langToggle"
            type="button"
            aria-label={lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
            onClick={toggleLang}
          >
            <span className="lang-toggle-track">
              <span className={`lang-toggle-opt${lang === "es" ? " is-active" : ""}`} data-lang-opt="es">
                ES
              </span>
              <span className={`lang-toggle-opt${lang === "en" ? " is-active" : ""}`} data-lang-opt="en">
                EN
              </span>
              <span
                className="lang-toggle-pill"
                id="langPill"
                style={{ transform: lang === "en" ? "translateX(31px)" : "translateX(0)" }}
              />
            </span>
          </button>
          <Link href="#cotizar" className="btn btn-primary btn-sm header-cta">
            <T es="Solicitar cotización" en="Get a quote" />
          </Link>
          <button
            className={`menu-toggle${menuOpen ? " is-active" : ""}`}
            id="menuToggle"
            type="button"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id="mobileMenu">
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              <T es={link.es} en={link.en} />
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <a href="tel:+17708644011" className="btn btn-ghost">
            <T es="Llamar al" en="Call" /> (770) 864-4011
          </a>
          <Link href="#cotizar" className="btn btn-primary" onClick={closeMenu}>
            <T es="Solicitar cotización" en="Get a quote" />
          </Link>
        </div>
      </div>
    </header>
  );
}
