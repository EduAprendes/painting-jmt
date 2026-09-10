"use client";

import { useState, type FormEvent } from "react";
import { T } from "@/lib/language-context";
import { Reveal } from "./Reveal";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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
              <label htmlFor="cf-name">
                <T es="Nombre" en="Name" />
              </label>
              <input type="text" id="cf-name" name="name" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="cf-phone">
                <T es="Teléfono" en="Phone" />
              </label>
              <input type="tel" id="cf-phone" name="phone" required autoComplete="tel" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="cf-message">
              <T es="Mensaje" en="Message" />
            </label>
            <textarea id="cf-message" name="message" rows={4} required></textarea>
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
