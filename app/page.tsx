"use client";

import Countdown from "./countdown";
import "./globals.css";
import { Button } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const image_path = "url('/background.png')";
export const image_mobile_path = "url('/images/fairytale-invitation-bg.png')";
export const image_mobile_path_2 = "url('/background_2.png')";

export default function Home() {
  const onRsvp = () => {
    window.open(
      "https://wa.me/79107867?text=Hola%21%20Quer%C3%ADa%20confirmar%20mi%20asistencia%20a%20los%20quince%20a%C3%B1os%20de%20Grecia%21",
      "_blank",
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Desktop layout */}
      <div
        className="hidden md:block w-full h-full flex flex-row justify-center items-center"
        style={{
          backgroundImage: image_path,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPositionX: "50%",
        }}
      >
        <div className="max-w-[40%]">
          <p className="font-(family-name:--font-cormorant) font-[600] italic text-center">
            Como en un cuento de hadas, hay momentos que marcan
            <br />
            nuestra historia... hoy comienza el mío y quiero que seas parte de
            él
          </p>

          <p className="font-(family-name:--font-cormorant) italic text-center">
            Con la bendición de Dios
            <br />y el amor de mis padres,
          </p>
          <h2 className="font-(family-name:--font-tangerine) font-[400] text-center">
            Jaime Hernandez<span>&nbsp;y&nbsp;</span>Rubia de Hernández
          </h2>
        </div>
      </div>
      {/* Mobile layout */}
      <div className="lg:hidden w-[92%] h-[95dvh] border-5 border-ink-soft absolute left-50% top-5" />
      <div
        className="lg:hidden container w-full h-[100dvh] flex flex-row justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('/images/fairytale-invitation-bg.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPositionX: "50%",
        }}
      >
        <div className="max-w-[80%] flex flex-col items-center justify-center">
          <div className="min-h-[10dvh]">&nbsp;</div>
          <p
            className="font-(family-name:--font-cormorant) text-[1.1em] font-bold leading-[100%] pt-5 pb-5 italic text-center"
            style={{ textShadow: "1px 1px 20px white" }}
          >
            Como en un cuento de hadas, hay momentos que marcan nuestra
            historia... hoy comienza el mío y quiero que seas parte de él
          </p>

          <p
            className="font-(family-name:--font-cormorant) text-[1.1em] italic leading-[100%] text-center pl-5 pr-5"
            style={{ textShadow: "1px 1px 20px white" }}
          >
            Con la bendición de Dios
            <br />y el amor de mis padres,
          </p>
          <h2 className="font-(family-name:--font-tangerine) text-[2.3em] text-(--ink-soft) leading-[90%] text-center p-5">
            Jaime Hernandez y
            <br />
            Rubia de Hernández
          </h2>
          <p className="font-(family-name:--font-cormorant) text-[1.2em] italic leading-[100%] text-center mb-5 pl-5 pr-5">
            tengo el honor de invitarte a celebrar
          </p>
          <h5 className="font-(family-name:--font-cormorant) text-[1.1em] text-(--ink-soft) leading-[100%] tracking-[-3%] text-center mb-2">
            MIS XV AÑOS
          </h5>
          <h1 className="font-(family-name:--font-tangerine) text-[5em] text-(--ink-soft) leading-[60%] tracking-[-3%] text-center pl-5 pr-5 pb-5">
            Grecia Hernández
          </h1>
          <p className="font-(family-name:--font-cormorant) text-[1.4em] font-bold text-center pl-5 pr-5 mt-5">
            Sábado 16 de mayo de 2026
          </p>
          <div className="mb-[3vh] md:w-[40%] w-[70vw]">
            <Button
              variant="outlined"
              fullWidth
              style={{
                backgroundColor: "var(--ink-soft)",
                color: "white",
                fontFamily: "var(--font-montserrat)",
                textTransform: "none",
                fontSize: "0.8em",
                fontWeight: "bold",
                padding: "5px",
                borderRadius: "50px",
                borderColor: "var(--ink-soft)"
              }}
              onClick={onRsvp}
              startIcon={<CheckIcon />}
            >
              Confirmar asistencia
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-[92%] h-[105dvh] border-l-5 border-r-5 border-white absolute left-50% top-[100dvh]" />
      <div
        className="h-[100dvh] lg:hidden w-full flex flex-col justify-end items-center p-5"
        style={{
          backgroundImage: "url('/imagen_3.jpeg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPositionX: "50%",
        }}
      >
        &nbsp;
      </div>
      <div className="pt-3 pb-7">
        <div className="w-full flex items-center justify-center pb-3">
          <Image
            src="/images/fairytale-assets/clock.png"
            width={180}
            height={50}
            alt="Castillo"
          />
        </div>
        <p className="countdown-title font-(family-name:--font-tangerine) text-[4em] leading-[80%] text-center">
          Ya solo faltan
        </p>
        <Countdown />
      </div>

      <div
        className="h-[100dvh] lg:hidden w-full flex flex-col justify-end items-center p-5"
        style={{
          backgroundImage: "url('/imagen_2.jpeg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPositionX: "50%",
        }}
      >
        &nbsp;
      </div>
      <div className="pt-7 pr-7 pl-7 pb-3">
        <h4 className="font-(family-name:--font-tangerine) text-[4em] leading-[40%] mt-5">
          Ubicación
        </h4>
        <p className="font-(family-name:--font-cormorant) font-bold italic text-[0.9em] tracking-[-2%] mb-5">
          Haz clic en la dirección para abrir el mapa
        </p>
        <div
          className="flex flex-col items-start mb-5"
          onClick={() =>
            window.open("https://maps.app.goo.gl/gjdQcKA2YHtSVdkP9", "_blank")
          }
        >
          <h4 className="font-(family-name:--font-cormorant) font-bold text-[1.8em] tracking-[-2%]">
            Misa de Acción de Gracias
          </h4>
          <div className="flex flex-row gap-5 items-center justify-center w-full">
            <LocationOnIcon />
            <p className="font-(family-name:--font-cormorant) text-[1.2em]">
              Parroquia Corazón de María
            </p>
            <p className="font-(family-name:--font-cormorant) text-[1.5em] leading-[80%] font-bold text-center justify-self-end">
              5:45
              <br />
              p.m.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-start"
          onClick={() =>
            window.open("https://maps.app.goo.gl/M5NDKG8ymnaH19ri8", "_blank")
          }
        >
          <h4 className="font-(family-name:--font-cormorant) font-bold text-[1.8em] tracking-[-2%]">
            Recepción
          </h4>

          <div className="flex flex-row gap-5 items-center justify-center w-full">
            <LocationOnIcon />
            <p className="font-(family-name:--font-cormorant) text-[1.2em]">
              Hotel Sheraton Presidente
            </p>
            <p className="font-(family-name:--font-cormorant) text-[1.5em] leading-[80%] font-bold text-center justify-self-end">
              7:30
              <br />
              p.m.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center p-1">
          <Image
            src="/images/fairytale-assets/castle.png"
            width={180}
            height={50}
            alt="Castillo"
          />
        </div>
      </div>
      <div className="bg-ink-soft text-white w-full p-7">
        <h4 className="font-(family-name:--font-tangerine) text-[3em] leading-[60%] mt-5">
          Código de vestimenta
        </h4>
        <div className="flex flex-row gap-5">
          <div>
            <p className="font-(family-name:--font-cormorant) italic text-[1.3em] tracking-[-2%]">
              Formal Elegante
            </p>
            <p className="font-(family-name:--font-cormorant) italic text-[1em]  tracking-[-2%]">
              (El color celeste ha sido reservado para la quinceañera)
            </p>
          </div>
          <Image
            src="/images/fairytale-assets/slipper.png"
            width={80}
            height={50}
            alt="Tacón"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
      <div className="bg-white text-ink-soft w-full p-7">
        <div className="flex flex-row gap-2 justify-around items-center">
          <Image
            src="/images/fairytale-assets/carriage.png"
            width={100}
            height={50}
            alt="Tacón"
            style={{ transform: "scaleX(-1)" }}
          />
          <div>
            <p className="font-(family-name:--font-cormorant) italic text-[1.4em] leading-[90%] tracking-[-2%] text-center">
              Muestras de cariño en
              <br />
              <strong>Regalo de sobre</strong>
            </p>
          </div>
        </div>
      </div>
      <div
        className="h-[100dvh] lg:hidden w-full flex flex-col justify-end items-center p-5"
        style={{
          backgroundImage: "url('/imagen_1.jpeg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPositionX: "50%",
        }}
      >
        &nbsp;
      </div>
    </div>
  );
}
