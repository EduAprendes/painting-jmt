import { T } from "@/lib/language-context";
import { PhoneIcon } from "./Icons";

export function StickyCall() {
  return (
    <>
      <a href="tel:+17708644011" className="sticky-call sticky-call--desktop" id="stickyCallDesktop">
        <span className="sticky-call-icon">
          <PhoneIcon width={17} height={17} />
        </span>
        <span className="sticky-call-text">
          <span className="sticky-call-label">
            <T es="Llamar ahora" en="Call now" />
          </span>
          <span className="sticky-call-number">(770) 864-4011</span>
        </span>
      </a>

      <a href="tel:+17708644011" className="sticky-call sticky-call--mobile" id="stickyCallMobile">
        <PhoneIcon width={18} height={18} />
        <span>
          <T es="Llamar" en="Call" /> · (770) 864-4011
        </span>
      </a>
    </>
  );
}
