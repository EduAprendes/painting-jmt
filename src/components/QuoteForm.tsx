"use client";

import { useState, type FormEvent } from "react";
import { T } from "@/lib/language-context";
import { CheckIcon, MailIcon, PencilIcon, PhoneIcon, PinIcon, UserIcon } from "./Icons";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // TODO: connect to email / CRM / webhook / WhatsApp.
    // Example:
    // fetch('https://YOUR-ENDPOINT/quote', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(Object.fromEntries(new FormData(form))),
    // });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <aside className="hero-form" id="cotizar">
        <div className="quote-form-success">
          <div className="success-icon">
            <CheckIcon />
          </div>
          <h3>
            <T es="Gracias. Recibimos tu solicitud." en="Thank you. We received your request." />
          </h3>
          <p>
            <T
              es="Nos comunicaremos contigo para conocer más sobre tu proyecto."
              en="We'll be in touch to learn more about your project."
            />
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="hero-form" id="cotizar">
      <form className="quote-form" noValidate onSubmit={handleSubmit}>
        <div className="quote-form-head">
          <span className="quote-form-icon" aria-hidden="true">
            <PencilIcon />
          </span>
          <div>
            <h2>
              <T es="Cuéntanos qué necesitas" en="Tell us what you need" />
            </h2>
            <p>
              <T es="Te contactamos para preparar tu cotización." en="We'll reach out to put together your quote." />
            </p>
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="qf-name">
              <T es="Nombre" en="Name" />
            </label>
            <div className="input-icon-wrap">
              <UserIcon className="input-icon" />
              <input type="text" id="qf-name" name="name" required autoComplete="name" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="qf-phone">
              <T es="Teléfono" en="Phone" />
            </label>
            <div className="input-icon-wrap">
              <PhoneIcon className="input-icon" />
              <input type="tel" id="qf-phone" name="phone" required autoComplete="tel" />
            </div>
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="qf-email">
              <T es="Correo" en="Email" />
            </label>
            <div className="input-icon-wrap">
              <MailIcon className="input-icon" />
              <input type="email" id="qf-email" name="email" required autoComplete="email" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="qf-location">
              <T es="Ubicación" en="Location" />
            </label>
            <div className="input-icon-wrap">
              <PinIcon className="input-icon" />
              <input type="text" id="qf-location" name="location" autoComplete="off" />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          <T es="Solicitar cotización" en="Request a quote" />
        </button>

        <a href="tel:+17708644011" className="quote-form-call">
          <T es="O llama directamente al" en="Or call us directly at" />
          &nbsp;(770) 864-4011
        </a>

        <p className="quote-form-consent">
          <T
            es="Al enviar este formulario aceptas que JMT Painting LLC te contacte sobre tu proyecto."
            en="By submitting this form you agree that JMT Painting LLC may contact you about your project."
          />
        </p>
      </form>
    </aside>
  );
}
