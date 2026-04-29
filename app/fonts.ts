import { Cormorant_Garamond, Kapakana, Montserrat } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
});

const tangerine = Kapakana({
  variable: "--font-tangerine",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const fonts = `${cormorantGaramond.variable} ${tangerine.variable} ${montserratFont.variable}`;
