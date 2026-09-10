import { T } from "@/lib/language-context";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="wrap contact-grid">
        <Reveal className="contact-info">
          <h2>
            <T es="Hablemos de tu proyecto" en="Let's talk about your project" />
          </h2>

          <div className="contact-detail">
            <span className="contact-detail-label">
              <T es="Dirección" en="Address" />
            </span>
            <p>
              JMT PAINTING LLC
              <br />
              780 Heritage Pkwy
              <br />
              Lithia Springs, GA 30122
              <br />
              <T es="Estados Unidos" en="United States" />
            </p>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-label">
              <T es="Teléfono" en="Phone" />
            </span>
            <p>
              <a href="tel:+17708644011">+1 (770) 864-4011</a>
            </p>
          </div>

          <a href="tel:+17708644011" className="btn btn-primary">
            <T es="Llamar ahora" en="Call now" />
          </a>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=780+Heritage+Pkwy,+Lithia+Springs,+GA+30122&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de JMT Painting LLC"
            ></iframe>
          </div>
        </Reveal>

        <ContactForm />
      </div>
    </section>
  );
}
