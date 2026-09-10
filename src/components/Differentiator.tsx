import { T } from "@/lib/language-context";
import { Reveal } from "./Reveal";

const LIST = [
  { dot: "dot-copper", es: "Preparación cuidadosa", en: "Careful preparation" },
  { dot: "dot-navy", es: "Acabados limpios", en: "Clean finishes" },
  { dot: "dot-slate", es: "Trabajo residencial y comercial", en: "Residential and commercial work" },
  { dot: "dot-sage", es: "Calidad y garantía", en: "Quality and warranty" },
];

export function Differentiator() {
  return (
    <section className="differentiator">
      <div className="wrap differentiator-grid">
        <Reveal className="differentiator-copy">
          <h2>
            <T
              es="No se trata solamente de cambiar el color."
              en="It's not just about changing the color."
            />
          </h2>
          <p>
            <T
              es="Un buen trabajo comienza preparando correctamente cada superficie y termina revisando los pequeños detalles."
              en="Good work starts with properly preparing every surface, and ends with checking the small details."
            />
          </p>

          <div className="stat-block">
            <span className="stat-num">25</span>
            <span className="stat-label">
              <T
                es={
                  <>
                    años de experiencia
                    <br />
                    respaldan cada proyecto
                  </>
                }
                en={
                  <>
                    years of experience
                    <br />
                    behind every project
                  </>
                }
              />
            </span>
          </div>
        </Reveal>

        <ul className="differentiator-list">
          {LIST.map((item) => (
            <Reveal as="li" key={item.dot}>
              <span className={`dot ${item.dot}`}></span>
              <span>
                <T es={item.es} en={item.en} />
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
