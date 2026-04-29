import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { fonts } from "./fonts";
import theme from "./theme";

export const metadata: Metadata = {
  title: "XV años de Grecia Hernández",
  description: "Invitación de XV años para Grecia Hernández",
  authors: [{ name: "David Alvarado" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleAnalytics gaId="G-MX6D6F1V5S" />
      <body className={`${fonts}`}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
