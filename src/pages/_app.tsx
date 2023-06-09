import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Source_Code_Pro } from "next/font/google";
import { AnimatePresence } from "framer-motion";
const googleFont = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --dm-font: ${googleFont.style.fontFamily};
        }
      `}</style>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
