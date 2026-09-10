"use client";

import { useMemo, useState } from "react";
import { LocalizedImage, T } from "@/lib/language-context";
import { Reveal } from "./Reveal";

import galleryExteriorBrick from "../../public/images/gallery-exterior-brick.webp";
import galleryInteriorFresh from "../../public/images/gallery-interior-fresh.webp";
import galleryExteriorCapecod from "../../public/images/gallery-exterior-capecod.webp";
import galleryFacadeBlue from "../../public/images/gallery-facade-blue.webp";
import galleryInteriorResidential from "../../public/images/gallery-interior-residential.webp";
import galleryFacadeDetail from "../../public/images/gallery-facade-detail.webp";
import galleryExteriorConstruction from "../../public/images/gallery-exterior-construction.webp";
import galleryInteriorStairs from "../../public/images/gallery-interior-stairs.webp";
import galleryExteriorNavyDeck from "../../public/images/gallery-exterior-navy-deck.webp";
import galleryDeckCarpentry from "../../public/images/gallery-deck-carpentry.webp";
import galleryExteriorGrey from "../../public/images/gallery-exterior-grey.webp";
import galleryPorchProgress from "../../public/images/gallery-porch-progress.webp";
import transformPorch from "../../public/images/transform-porch.webp";

type GalleryItem = {
  img: typeof galleryExteriorBrick;
  altEs: string;
  altEn: string;
  captionEs: React.ReactNode;
  captionEn: React.ReactNode;
  cats: string[];
  variant?: "big" | "tall" | "wide";
  inProgress?: boolean;
};

const ITEMS: GalleryItem[] = [
  {
    img: galleryExteriorBrick,
    altEs: "Repintado exterior de vivienda en ladrillo blanco",
    altEn: "Exterior repaint of a white brick home",
    captionEs: "Repintado exterior",
    captionEn: "Exterior repaint",
    cats: ["exterior", "residencial"],
    variant: "big",
  },
  {
    img: galleryInteriorFresh,
    altEs: "Interior recién pintado, habitación",
    altEn: "Freshly painted bedroom interior",
    captionEs: "Interior recién pintado",
    captionEn: "Freshly painted interior",
    cats: ["interior", "residencial"],
  },
  {
    img: galleryExteriorCapecod,
    altEs: "Repintado exterior de vivienda estilo cape cod",
    altEn: "Exterior repaint of a cape cod style home",
    captionEs: "Repintado exterior",
    captionEn: "Exterior repaint",
    cats: ["exterior", "residencial"],
  },
  {
    img: galleryFacadeBlue,
    altEs: "Fachada renovada con revestimiento azul",
    altEn: "Renovated facade with blue siding",
    captionEs: "Fachada renovada",
    captionEn: "Renovated facade",
    cats: ["exterior", "residencial"],
    variant: "tall",
  },
  {
    img: galleryInteriorResidential,
    altEs: "Interior residencial con acabado limpio",
    altEn: "Residential interior with a clean finish",
    captionEs: "Interior residencial",
    captionEn: "Residential interior",
    cats: ["interior", "residencial"],
  },
  {
    img: galleryFacadeDetail,
    altEs: "Detalle de fachada exterior repintada",
    altEn: "Detail of a repainted exterior facade",
    captionEs: "Detalle de fachada",
    captionEn: "Facade detail",
    cats: ["exterior", "residencial"],
  },
  {
    img: galleryExteriorConstruction,
    altEs: "Pintura exterior en proceso sobre construcción nueva",
    altEn: "Exterior painting in progress on new construction",
    captionEs: "Exterior en construcción",
    captionEn: "Exterior, new build",
    cats: ["exterior", "residencial", "proceso"],
    variant: "wide",
    inProgress: true,
  },
  {
    img: galleryInteriorStairs,
    altEs: "Detalle interior de zona de escalera",
    altEn: "Interior detail near the stairway area",
    captionEs: "Detalle interior",
    captionEn: "Interior detail",
    cats: ["interior", "residencial"],
  },
  {
    img: galleryExteriorNavyDeck,
    altEs: "Exterior en azul marino con deck",
    altEn: "Navy blue exterior with deck",
    captionEs: "Exterior + deck",
    captionEn: "Exterior + deck",
    cats: ["exterior", "residencial"],
  },
  {
    img: galleryDeckCarpentry,
    altEs: "Deck residencial pintado",
    altEn: "Painted residential deck",
    captionEs: "Deck y carpintería",
    captionEn: "Deck & carpentry",
    cats: ["exterior", "residencial"],
  },
  {
    img: galleryExteriorGrey,
    altEs: "Pintura exterior en tono gris con base de ladrillo",
    altEn: "Exterior painting in grey tone with brick base",
    captionEs: "Pintura exterior",
    captionEn: "Exterior painting",
    cats: ["exterior", "residencial"],
    variant: "tall",
  },
  {
    img: galleryPorchProgress,
    altEs: "Porche pintado en proceso, superficie protegida",
    altEn: "Porch being painted, surfaces protected",
    captionEs: "Trabajo en proceso",
    captionEn: "Work in progress",
    cats: ["exterior", "residencial", "proceso"],
    inProgress: true,
  },
];

const FILTERS = [
  { key: "all", es: "Todos", en: "All" },
  { key: "interior", es: "Interior", en: "Interior" },
  { key: "exterior", es: "Exterior", en: "Exterior" },
  { key: "comercial", es: "Comercial", en: "Commercial" },
  { key: "residencial", es: "Residencial", en: "Residential" },
];

export function Results() {
  const [filter, setFilter] = useState("all");

  const visibleCount = useMemo(
    () => ITEMS.filter((item) => filter === "all" || item.cats.includes(filter)).length,
    [filter]
  );

  return (
    <section className="results" id="resultados">
      <div className="wrap">
        <div className="section-head section-head--split">
          <div>
            <h2>
              <T es="El resultado habla por nosotros." en="The results speak for themselves." />
            </h2>
            <p className="section-sub">
              <T
                es="Mira algunos espacios que hemos renovado con pintura, reparación y atención a cada detalle."
                en="Take a look at spaces we've transformed with painting, repair, and attention to every detail."
              />
            </p>
          </div>
          <div className="gallery-filters" role="group" aria-label="Filtrar proyectos">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`filter-btn${filter === f.key ? " is-active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                <T es={f.es} en={f.en} />
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid" id="galleryGrid">
          {ITEMS.map((item, i) => {
            const show = filter === "all" || item.cats.includes(filter);
            const variantClass = item.variant ? ` gallery-item--${item.variant}` : "";
            return (
              <Reveal
                as="figure"
                key={i}
                className={`gallery-item${variantClass}${show ? "" : " is-hidden"}`}
              >
                <LocalizedImage src={item.img} altEs={item.altEs} altEn={item.altEn} sizes="(max-width: 640px) 50vw, 25vw" fill />
                <figcaption>
                  {item.inProgress && <span className="badge-inline">En proceso</span>}{" "}
                  <T es={item.captionEs} en={item.captionEn} />
                </figcaption>
              </Reveal>
            );
          })}
        </div>

        <p className="gallery-empty" id="galleryEmpty" hidden={visibleCount !== 0}>
          <T
            es="Pronto sumaremos proyectos comerciales a esta galería."
            en="Commercial projects are coming soon to this gallery."
          />
        </p>
      </div>

      <div className="transform-strip reveal is-visible">
        <div className="wrap transform-inner">
          <div className="transform-media">
            <LocalizedImage
              src={transformPorch}
              altEs="Preparación y pintura de porche, trabajo real de JMT Painting"
              altEn="Porch preparation and painting, real JMT Painting work"
              sizes="(max-width: 1080px) 100vw, 55vw"
              fill
            />
          </div>
          <div className="transform-card">
            <div className="transform-row">
              <span className="transform-label">
                <T es="Proyecto" en="Project" />
              </span>
              <span className="transform-value">
                <T es="Repintado de porche" en="Porch repaint" />
              </span>
            </div>
            <div className="transform-row">
              <span className="transform-label">
                <T es="Servicio" en="Service" />
              </span>
              <span className="transform-value">
                <T es="Preparación + pintura" en="Prep + paint" />
              </span>
            </div>
            <div className="transform-row">
              <span className="transform-label">
                <T es="Resultado" en="Result" />
              </span>
              <span className="transform-value">
                <T es="Acabado limpio y protegido" en="Clean, protected finish" />
              </span>
            </div>
            <p className="transform-caption">
              <T es="Fotografía real de uno de nuestros proyectos." en="Real photo from one of our projects." />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
