import Link from "next/link";
import { LocalizedImage, T } from "@/lib/language-context";
import { PhoneIcon, PinIcon, UserIcon } from "./Icons";
import { QuoteForm } from "./QuoteForm";
import heroExterior from "../../public/images/hero-exterior.webp";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-inner">
        <div className="hero-content">
          <div className="years-chip">
            <span className="years-chip-num">25</span>
            <span className="years-chip-text">
              <T
                es={
                  <>
                    años pintando
                    <br />
                    en Georgia
                  </>
                }
                en={
                  <>
                    years painting
                    <br />
                    in Georgia
                  </>
                }
              />
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">
              <T es="Pintamos." en="We paint." />
            </span>
            <span className="hero-title-line">
              <T es="Reparamos." en="We repair." />
            </span>
            <span className="hero-title-line hero-title-line--accent">
              <T es="Renovamos." en="We renovate." />
            </span>
          </h1>

          <p className="hero-sub">
            <T
              es="Pintura residencial y comercial en Georgia, con atención al detalle y trabajo garantizado."
              en="Residential and commercial painting in Georgia, with attention to detail and guaranteed work."
            />
          </p>

          <div className="hero-tags">
            <span className="tag-chip">
              <T es="Interior" en="Interior" />
            </span>
            <span className="tag-chip">
              <T es="Exterior" en="Exterior" />
            </span>
            <span className="tag-chip">Drywall</span>
            <span className="tag-chip">
              <T es="Carpintería" en="Carpentry" />
            </span>
          </div>

          <div className="hero-ctas">
            <Link href="#cotizar" className="btn btn-primary btn-lg">
              <T es="Solicitar cotización" en="Request a quote" />
            </Link>
            <a href="tel:+17708644011" className="btn btn-outline btn-lg">
              <PhoneIcon />
              <T es="Llamar al" en="Call" />
              &nbsp;(770) 864-4011
            </a>
          </div>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <UserIcon />
              <T es="Residencial + Comercial" en="Residential + Commercial" />
            </span>
            <span className="hero-meta-item">
              <PinIcon />
              Lithia Springs, Georgia
            </span>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media-frame">
            <LocalizedImage
              src={heroExterior}
              altEs="Fachada residencial repintada por JMT Painting en Georgia"
              altEn="Residential exterior repainted by JMT Painting in Georgia"
              className="hero-media-img"
              sizes="(max-width: 940px) 100vw, 55vw"
              fill
              priority
            />
            <svg className="hero-media-brush" viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M0,40 C120,10 180,80 300,55 C420,30 480,90 600,50 L600,120 L0,120 Z"
                fill="var(--cream-50)"
              />
            </svg>
          </div>
          <div className="hero-media-chip">
            <span className="dot dot-copper"></span>
            <T es="Exterior · Georgia" en="Exterior · Georgia" />
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
