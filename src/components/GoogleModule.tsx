import { T } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { GoogleGIcon } from "./Icons";

export function GoogleModule() {
  return (
    <section className="google-module">
      <div className="wrap">
        <Reveal className="google-card">
          <div className="google-card-info">
            <GoogleGIcon className="google-g" width={28} height={28} />
            <div>
              <p className="google-name">JMT Painting LLC</p>
              <p className="google-loc">Lithia Springs, GA</p>
            </div>
          </div>
          <p className="google-cta-text">
            <T es="Encuéntranos en Google" en="Find us on Google" />
          </p>
          <a
            className="btn btn-outline btn-sm"
            target="_blank"
            rel="noopener"
            href="https://www.google.com/maps/search/?api=1&query=JMT+Painting+LLC+780+Heritage+Pkwy+Lithia+Springs+GA+30122"
          >
            <T es="Ver perfil" en="View profile" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
