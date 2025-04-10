import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Big_Shoulders_Inline_Display as FontSigmar,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSigmar = FontSigmar({
  subsets: ["latin"],
  variable: "--font-sigmar",
});
