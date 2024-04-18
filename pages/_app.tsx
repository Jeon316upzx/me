import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="mx-3 lg:mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
