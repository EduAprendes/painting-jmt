"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image, { type ImageProps } from "next/image";

export type Lang = "es" | "en";

const META: Record<Lang, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  es: {
    title: "JMT Painting LLC | Pintura Residencial y Comercial en Lithia Springs, GA",
    description:
      "Pintura interior y exterior, reparación de drywall y carpintería en Lithia Springs, Georgia. 25 años de experiencia. Solicita tu cotización con JMT Painting LLC.",
    ogTitle: "JMT Painting LLC | Pintura Residencial y Comercial en Georgia",
    ogDescription: "Interior, exterior, drywall y carpintería. 25 años de experiencia en Lithia Springs, Georgia.",
  },
  en: {
    title: "JMT Painting LLC | Residential & Commercial Painting in Lithia Springs, GA",
    description:
      "Interior and exterior painting, drywall repair and carpentry in Lithia Springs, Georgia. 25 years of experience. Request your quote with JMT Painting LLC.",
    ogTitle: "JMT Painting LLC | Residential & Commercial Painting in Georgia",
    ogDescription: "Interior, exterior, drywall and carpentry. 25 years of experience in Lithia Springs, Georgia.",
  },
};

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("data-lang", lang);

    const meta = META[lang];
    document.title = meta.title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.ogTitle);
    setMeta('meta[property="og:description"]', "content", meta.ogDescription);
  }, [lang]);

  const toggleLang = () => setLangState((prev) => (prev === "es" ? "en" : "es"));
  const setLang = (next: Lang) => setLangState(next);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Renders es/en text depending on the active language, mirroring the original i18n-es/i18n-en spans. */
export function T({ es, en }: { es: ReactNode; en: ReactNode }) {
  const { lang } = useLanguage();
  return <>{lang === "en" ? en : es}</>;
}

type LocalizedImageProps = Omit<ImageProps, "alt"> & { altEs: string; altEn: string };

/** next/image wrapper that swaps its alt text with the active language. */
export function LocalizedImage({ altEs, altEn, ...rest }: LocalizedImageProps) {
  const { lang } = useLanguage();
  return <Image alt={lang === "en" ? altEn : altEs} {...rest} />;
}
