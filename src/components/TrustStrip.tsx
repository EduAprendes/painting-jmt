import { T } from "@/lib/language-context";

const ITEMS: Array<{ es: React.ReactNode; en: React.ReactNode }> = [
  {
    es: (
      <>
        <strong>25</strong> años
      </>
    ),
    en: (
      <>
        <strong>25</strong> years
      </>
    ),
  },
  { es: "Residencial", en: "Residential" },
  { es: "Comercial", en: "Commercial" },
  { es: "Interior", en: "Interior" },
  { es: "Exterior", en: "Exterior" },
  { es: "Drywall", en: "Drywall" },
  { es: "Carpintería", en: "Carpentry" },
];

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Servicios principales">
      <div className="wrap trust-strip-inner">
        {ITEMS.map((item, i) => (
          <span key={i} style={{ display: "contents" }}>
            {i > 0 && <span className="trust-sep" aria-hidden="true"></span>}
            <span className={`trust-item${i === 0 ? " trust-item--years" : ""}`}>
              <T es={item.es} en={item.en} />
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
