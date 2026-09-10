import { T } from "@/lib/language-context";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    num: "01",
    status: "Submitted",
    dotClass: "",
    titleEs: "Cuéntanos tu proyecto",
    titleEn: "Tell us about your project",
    descEs: "Completa el formulario o llámanos.",
    descEn: "Fill out the form or give us a call.",
  },
  {
    num: "02",
    status: "Scheduled",
    dotClass: "status-dot--scheduled",
    titleEs: "Evaluamos el trabajo",
    titleEn: "We evaluate the work",
    descEs: "Revisamos lo que necesita el espacio y definimos el alcance.",
    descEn: "We look at what the space needs and define the scope.",
  },
  {
    num: "03",
    status: "In progress",
    dotClass: "status-dot--progress",
    titleEs: "Preparamos y renovamos",
    titleEn: "We prep and renovate",
    descEs: "Protegemos, reparamos, preparamos y realizamos el trabajo.",
    descEn: "We protect, repair, prepare, and do the work.",
  },
  {
    num: "04",
    status: "Completed",
    dotClass: "status-dot--done",
    titleEs: "Revisamos contigo",
    titleEn: "We review together",
    descEs: "Comprobamos acabados y detalles antes de entregar.",
    descEn: "We check finishes and details before handoff.",
  },
];

export function Process() {
  return (
    <section className="process" id="proceso">
      <div className="wrap">
        <div className="section-head">
          <h2>
            <T es="De la cotización al último detalle." en="From quote to final detail." />
          </h2>
        </div>

        <div className="process-flow">
          <span className="flow-tag">REQUEST</span>
          <span className="flow-arrow" aria-hidden="true">→</span>
          <span className="flow-tag">REVIEW</span>
          <span className="flow-arrow" aria-hidden="true">→</span>
          <span className="flow-tag">WORK</span>
          <span className="flow-arrow" aria-hidden="true">→</span>
          <span className="flow-tag">COMPLETE</span>
        </div>

        <div className="process-steps">
          {STEPS.map((step) => (
            <Reveal as="div" className="process-step" key={step.num}>
              <div className="process-step-top">
                <span className="process-num">{step.num}</span>
                <span className="status-chip">
                  <span className={`status-dot ${step.dotClass}`}></span>
                  {step.status}
                </span>
              </div>
              <h3>
                <T es={step.titleEs} en={step.titleEn} />
              </h3>
              <p>
                <T es={step.descEs} en={step.descEn} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
