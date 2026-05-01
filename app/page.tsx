"use client";

import Countdown from "./countdown";
import "./globals.css";
import { Button, Divider } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlayPauseAudio from "./play_audio";
import { SectionCover } from "./section-cover";

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
    <div className="flex flex-col items-center justify-center max-w-[100vw]">
      <div
        className="w-full relative min-h-[95vh] flex flex-row justify-center items-center"
        style={{
          overflowX: "clip",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('/background.png')",
          backgroundAttachment: "initial",
          backgroundSize: "cover",
          backgroundPosition: "50% 0",
        }}
      >
        <PlayPauseAudio />
        <Image
          src={"/corner-roses.png"}
          width={300}
          height={300}
          alt="Rosas"
          style={{
            zIndex: 3,
            position: "absolute",
            bottom: -90,
            left: -100,
            transform: "rotate(-90deg)",
          }}
        />
        <Image
          src={"/corner-roses.png"}
          width={300}
          height={300}
          alt="Rosas"
          style={{
            zIndex: 3,
            position: "absolute",
            top: -100,
            left: -90,
          }}
        />
        <div className="min-h-[95vh] m-5 pr-5 pl-5 flex flex-col items-center justify-center border-1 border-ink-soft">
          <Image
            src={"/images/fairytale-assets/castle.png"}
            width={150}
            height={150}
            alt="Castillo"
            style={{
              zIndex: 3,
              marginBottom: "2vh",
            }}
          />
          <p className="font-(family-name:--font-cormorant) text-[0.9em] leading-[100%] pb-5 pl-2 pr-2 italic tracking-[5%] uppercase text-center">
            Como en un cuento de hadas, hay momentos que marcan nuestra
            historia... hoy comienza el mío y quiero que seas parte de él
          </p>
          <p
            className="font-(family-name:--font-cormorant) text-[1em] leading-[100%] uppercase text-center pl-5 pr-5"
            style={{ textShadow: "1px 1px 20px white" }}
          >
            Con la bendición de Dios
            <br />y el amor de mis padres,
          </p>
          <div className="flex flex-row items-center p-5 gap-5 pb-5">
            <h2 className="font-(family-name:--font-tangerine) text-[2.3em] text-(--ink-soft) leading-[80%] text-center">
              Jaime Hernández
            </h2>
            <h2 className="font-(family-name:--font-tangerine) text-[2em] text-(--ink-soft) leading-[80%] text-center">
              y
            </h2>
            <h2 className="font-(family-name:--font-tangerine) text-[2.3em] text-(--ink-soft) leading-[80%] text-center">
              Rubia de Hernández
            </h2>
          </div>
          <p className="font-(family-name:--font-cormorant) text-[1em] leading-[100%] text-center uppercase mb-5">
            tengo el honor de invitarte a celebrar mis
          </p>
          <h5 className="font-(family-name:--font-cormorant) text-[2em] text-(--ink-soft) uppercase leading-[100%] text-center">
            XV Años
          </h5>
          <p className="font-(family-name:--font-cormorant) text-[0.5em] leading-[100%] text-center uppercase">
            &nbsp;
          </p>
          <h1 className="font-(family-name:--font-tangerine) text-[5em] text-(--ink-soft) leading-[60%] tracking-[-3%] text-center pb-1">
            Grecia Hernández
          </h1>
          <div className="flex flex-row items-center justify-center gap-2 pl-5 pr-5 mt-2">
            <p className="font-(family-name:--font-cormorant) text-[1.5em] text-(--ink-soft) font-bold text-center ">
              sábado
            </p>
            <p className="font-(family-name:--font-montserrat) text-[2.5em] text-(--ink-soft) text-center ">
              16
            </p>
            <p className="font-(family-name:--font-cormorant) text-[1.5em] text-(--ink-soft) font-bold text-center">
              mayo
            </p>
          </div>
          <div className="mb-[3vh] md:w-[40%] w-[70vw] mt-5 z-4">
            <Button
              variant="outlined"
              fullWidth
              style={{
                backgroundColor: "var(--ink-soft)",
                color: "white",
                fontFamily: "var(--font-montserrat)",
                textTransform: "none",
                fontSize: "1em",
                fontWeight: "bold",
                padding: "5px",
                borderRadius: "50px",
                borderColor: "var(--ink-soft)",
                zIndex: 4,
              }}
              onClick={onRsvp}
              startIcon={<CheckIcon />}
            >
              Confirmar asistencia
            </Button>
            <p className="font-(family-name:--font-cormorant) font-bold italic text-[1.2em] leading-[70%] mt-2 tracking-[-2%] text-center">
              Por favor, confirmar antes del 2 de mayo
            </p>
          </div>

          {/* <AudioPlayer
            src="/so_this_is_love.mp3"
            autoPlay
            loop
            color="var(--ink-soft)"
            width={"100%"}
            style={{
              padding: 0,
              zIndex: 2,
              height: "80px",
              background: "transparent",
              marginTop: "auto",
              boxShadow: "none",
            }}
          /> */}
        </div>
      </div>
      <SectionCover src="/imagen_3.jpeg" objectPosition="50% 65%" />
      <div className="flex items-center justify-center p-7 bg-ink-soft w-full">
        <p className="font-(family-name:--font-tangerine) text-[3em] text-white leading-[80%] tracking-[0%] text-center ">
          Nuestra princesa
          <br />
          desde pequeña
        </p>
      </div>
      <SectionCover src="/imagen_5.jpeg" objectPosition="50% 65%" />

      <div className="pt-3 pb-7">
        <div className="w-full flex items-center justify-center pb-3">
          <Image
            src="/images/fairytale-assets/clock.png"
            width={180}
            height={180}
            alt="Castillo"
          />
        </div>
        <p className="countdown-title font-(family-name:--font-tangerine) text-[4em] leading-[80%] text-center">
          Ya solo faltan
        </p>
        <Countdown />
      </div>
      <SectionCover src="/imagen_2.jpeg" objectPosition="0 50%" />
      <div className="pt-7 pr-7 pl-7 pb-3">
        <h4 className="font-(family-name:--font-tangerine) text-[4em] leading-[40%] mt-5 mb-5 text-center">
          Ubicación
        </h4>
        <div
          className="flex flex-col items-start mb-7"
          onClick={() =>
            window.open("https://ul.waze.com/ul?venue_id=177471625.1774454106.6841765&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "_blank")
          }
        >
          <h4 className="font-(family-name:--font-cormorant) font-bold text-[1.8em] tracking-[-2%]">
            Misa de Acción de Gracias
          </h4>
          <div className="flex flex-row gap-5 items-center justify-center w-full">
            <div className="flex flex-col items-center">
              <LocationOnIcon />
              <p className="font-(family-name:--font-cormorant) font-bold italic text-[0.9em] leading-[70%] mt-1 tracking-[-2%] text-center">
                Ver ubicación
              </p>
            </div>
            <p className="font-(family-name:--font-cormorant) text-[1.2em] leading-[90%]">
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
            window.open("https://ul.waze.com/ul?venue_id=177471625.1774454105.325146&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "_blank")
          }
        >
          <h4 className="font-(family-name:--font-cormorant) font-bold text-[1.8em] tracking-[-2%]">
            Recepción
          </h4>

          <div className="flex flex-row gap-5 items-center justify-center w-full">
            <div className="flex flex-col items-center">
              <LocationOnIcon />
              <p className="font-(family-name:--font-cormorant) font-bold italic text-[0.9em] leading-[70%] mt-1 tracking-[-2%] text-center">
                Ver ubicación
              </p>
            </div>
            <p className="font-(family-name:--font-cormorant) text-[1.2em] leading-[90%]">
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
        <div className="flex flex-col gap-2 justify-around items-center">
          <h4 className="font-(family-name:--font-tangerine) text-[3em] text-left leading-[60%] mt-5">
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
      </div>
      <div className="bg-white text-ink-soft w-full p-7">
        <div className="flex flex-row gap-2 justify-around items-center">
          <Image
            src="/images/fairytale-assets/carriage.png"
            width={100}
            height={50}
            alt="Carruaje"
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
      <SectionCover src="/imagen_1.jpeg" objectPosition="50% 25%" />
      <div className="w-full p-7 flex flex-col items-center justify-center">
        <div className="w-[90vw]">
          <Button
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: "var(--ink-soft)",
              color: "white",
              fontFamily: "var(--font-montserrat)",
              textTransform: "none",
              fontSize: "1.2em",
              fontWeight: "bold",
              padding: "5px",
              borderRadius: "50px",
              borderColor: "var(--ink-soft)",
            }}
            onClick={onRsvp}
            startIcon={<CheckIcon fontSize="large"/>}
          >
            Confirmar asistencia
          </Button>
          <p className="font-(family-name:--font-cormorant) font-bold italic text-[1.3em] leading-[70%] mt-2 tracking-[-2%] text-center">
            Por favor, confirmar antes del 2 de mayo
          </p>
        </div>
      </div>
    </div>
  );
}
