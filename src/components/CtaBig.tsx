import Link from "next/link";
import { T } from "@/lib/language-context";

export function CtaBig() {
  return (
    <section className="cta-big">
      <svg className="cta-brush" viewBox="0 0 400 400" aria-hidden="true">
        <path
          d="M40,340 C60,260 40,180 110,140 C180,100 220,180 190,240 C160,300 100,320 40,340 Z"
          fill="var(--copper-600)"
        />
      </svg>
      <div className="wrap cta-big-inner">
        <h2>
          <T
            es="¿Tienes un espacio que necesita pintura o reparación?"
            en="Have a space that needs painting or repair?"
          />
        </h2>
        <p>
          <T es="Cuéntanos qué necesitas y hablemos de tu proyecto." en="Tell us what you need and let's talk about your project." />
        </p>
        <div className="cta-big-actions">
          <Link href="#cotizar" className="btn btn-primary btn-lg">
            <T es="Solicitar cotización" en="Request a quote" />
          </Link>
          <a href="tel:+17708644011" className="btn btn-outline-light btn-lg">
            (770) 864-4011
          </a>
        </div>
      </div>
    </section>
  );
}
