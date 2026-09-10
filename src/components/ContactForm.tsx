"use client";

import { useState, type FormEvent } from "react";
import { T, useLanguage } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLanguage();
  const ph = (es: string, en: string) => (lang === "en" ? en : es);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // TODO: connect to email / CRM / webhook / WhatsApp.
    setSubmitted(true);
  };

  return (
    <Reveal as="form" className="contact-form" id="contactForm" noValidate onSubmit={handleSubmit}>
      <h3>
        <T es="Envíanos un mensaje" en="Send us a message" />
      </h3>
      {!submitted && (
        <>
          <div className="field-row">
            <div className="field">
              <input
                type="text"
                id="cf-name"
                name="name"
                required
                autoComplete="name"
                placeholder={ph("Nombre", "Name")}
                aria-label={ph("Nombre", "Name")}
              />
            </div>
            <div className="field">
              <input
                type="tel"
                id="cf-phone"
                name="phone"
                required
                autoComplete="tel"
                placeholder={ph("Teléfono", "Phone")}
                aria-label={ph("Teléfono", "Phone")}
              />
            </div>
          </div>
          <div className="field">
            <textarea
              id="cf-message"
              name="message"
              rows={4}
              required
              placeholder={ph("Mensaje", "Message")}
              aria-label={ph("Mensaje", "Message")}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            <T es="Enviar mensaje" en="Send message" />
          </button>
        </>
      )}
      {submitted && (
        <div className="contact-form-success" id="contactSuccess">
          <p>
            <T es="Gracias. Recibimos tu mensaje." en="Thank you. We received your message." />
          </p>
        </div>
      )}
    </Reveal>
  );
}
