import Link from "next/link";
import { LocalizedImage, T } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import aboutInterior from "../../public/images/about-interior.webp";

export function About() {
  return (
    <section className="about" id="sobre-jmt">
      <div className="wrap about-grid">
        <Reveal className="about-media">
          <LocalizedImage
            src={aboutInterior}
            altEs="Trabajo real de pintura interior realizado por JMT Painting"
            altEn="Real interior painting work by JMT Painting"
            sizes="(max-width: 1080px) 100vw, 50vw"
            fill
          />
        </Reveal>
        <Reveal className="about-copy">
          <span className="years-chip years-chip--inline">
            <span className="years-chip-num">25</span>
            <span className="years-chip-text">
              <T
                es={
                  <>
                    años en
                    <br />
                    Georgia
                  </>
                }
                en={
                  <>
                    years in
                    <br />
                    Georgia
                  </>
                }
              />
            </span>
          </span>
          <h2>
            <T es="Trabajo profesional. Atención directa." en="Professional work. Direct attention." />
          </h2>
          <p>
            <T
              es="JMT Painting LLC lleva 25 años trabajando en proyectos de pintura residencial y comercial, interiores y exteriores, además de reparaciones de drywall y trabajos de carpintería."
              en="JMT Painting LLC has spent 25 years working on residential and commercial painting projects, interiors and exteriors, along with drywall repairs and carpentry work."
            />
          </p>
          <p>
            <T
              es="Nuestro objetivo es entregar espacios renovados con buenos acabados, atención al detalle y un trabajo del que el cliente pueda sentirse tranquilo."
              en="Our goal is to deliver renovated spaces with quality finishes, attention to detail, and work our clients can feel good about."
            />
          </p>
          <Link href="#cotizar" className="btn btn-outline">
            <T es="Solicitar cotización" en="Request a quote" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
