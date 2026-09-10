import { LocalizedImage, T } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import serviceInterior from "../../public/images/service-interior.webp";
import serviceExterior from "../../public/images/service-exterior.webp";
import serviceDrywall from "../../public/images/service-drywall.webp";
import serviceCarpentry from "../../public/images/service-carpentry.webp";

const CARDS = [
  {
    img: serviceExterior,
    altEs: "Pintura exterior de vivienda en Georgia",
    altEn: "Exterior house painting in Georgia",
    index: "02",
    titleEs: "Pintura exterior",
    titleEn: "Exterior painting",
    descEs: "Renovación y protección de fachadas y superficies exteriores.",
    descEn: "Renovation and protection of exterior facades and surfaces.",
  },
  {
    img: serviceDrywall,
    altEs: "Reparación de drywall antes de pintar",
    altEn: "Drywall repair before painting",
    index: "03",
    titleEs: "Reparación de drywall",
    titleEn: "Drywall repair",
    descEs: "Reparación de grietas, agujeros y superficies antes de pintar.",
    descEn: "Repairing cracks, holes, and surfaces before painting.",
  },
  {
    img: serviceCarpentry,
    altEs: "Trabajo de carpintería en deck residencial",
    altEn: "Carpentry work on a residential deck",
    index: "04",
    titleEs: "Carpintería",
    titleEn: "Carpentry work",
    descEs: "Detalles, molduras, reparaciones y trabajos complementarios.",
    descEn: "Details, trim, repairs, and complementary work.",
  },
];

export function Services() {
  return (
    <section className="services" id="servicios">
      <div className="wrap">
        <div className="section-head">
          <h2>
            <T
              es="Todo lo que necesita tu espacio, con un solo equipo."
              en="Everything your space needs, with one team."
            />
          </h2>
        </div>

        <div className="services-grid">
          <Reveal as="article" className="service-feature">
            <div className="service-feature-img">
              <LocalizedImage
                src={serviceInterior}
                altEs="Pintura interior residencial en Georgia"
                altEn="Residential interior painting in Georgia"
                sizes="(max-width: 1080px) 100vw, 50vw"
                fill
              />
            </div>
            <div className="service-feature-copy">
              <span className="service-index">01</span>
              <h3>
                <T es="Pintura interior" en="Interior painting" />
              </h3>
              <p>
                <T es="Paredes, techos, molduras, puertas y acabados." en="Walls, ceilings, trim, doors, and finishes." />
              </p>
            </div>
          </Reveal>

          {CARDS.map((card) => (
            <Reveal as="article" className="service-card" key={card.index}>
              <div className="service-card-img">
                <LocalizedImage src={card.img} altEs={card.altEs} altEn={card.altEn} sizes="200px" fill />
              </div>
              <div className="service-card-copy">
                <span className="service-index">{card.index}</span>
                <h3>
                  <T es={card.titleEs} en={card.titleEn} />
                </h3>
                <p>
                  <T es={card.descEs} en={card.descEn} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="services-footnote">
          <span className="dot dot-sage"></span>
          <T es="Proyectos residenciales y comerciales" en="Residential & commercial projects" />
        </div>
      </div>
    </section>
  );
}
