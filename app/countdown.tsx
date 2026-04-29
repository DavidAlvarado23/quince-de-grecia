"use client";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const EVENT_DATE = "2026-05-16T17:45:00-06:00";
const COUNTDOWN_LABELS: [string, string, string, string] = [
  "Días",
  "Horas",
  "Minutos",
  "Segundos",
];

export default function Countdown() {
  return (
    <section className="countdown-section" aria-label="Cuenta regresiva">
      <div className="countdown-wrapper">
        <FlipClockCountdown
          className="fairytale-countdown"
          to={EVENT_DATE}
          labels={COUNTDOWN_LABELS}
          showSeparators={false}
          renderOnServer
          hideOnComplete={false}
          digitBlockStyle={{
            backgroundColor: "rgba(7, 63, 104, 0.88)",
            color: "#f4fbff",
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.28), 0 0.3rem 0.8rem rgba(28, 92, 134, 0.22)",
          }}
          dividerStyle={{
            color: "rgba(255, 255, 255, 0.28)",
            height: 1,
          }}
          labelStyle={{
            color: "var(--ink)",
            fontFamily: "var(--font-cormorant)",
            fontSize: "1em",
            textTransform: "none",
          }}
        />
      </div>
    </section>
  );
}
