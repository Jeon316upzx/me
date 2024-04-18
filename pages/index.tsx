import Image from "next/image";
import { Inter } from "next/font/google";
import { featuredLinks } from "@/config";
import Link from "next/link";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NextSeo
        title="Ifeanyi Anuebunwa"
        description="Portfolio - Ifeanyi Anuebunwa"
        canonical="ifeanyianuebunwa.xyz"
        openGraph={{
          url: "ifeanyianuebunwa.xyz",
          title: "Ifeanyi Anuebunwa",
          description: "Portfolio - Ifeanyi Anuebunwa",
          images: [
            {
              url: "https://res.cloudinary.com/ifeanyi/image/upload/v1713455112/mngg6v8aosgunlghaxyy.svg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/svg",
            },
            {
              url: "https://res.cloudinary.com/ifeanyi/image/upload/v1713455112/mngg6v8aosgunlghaxyy.svg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/svg",
            },
          ],
          siteName: "Ifeanyi Anuebunwa",
        }}
        twitter={{
          handle: "@saint_ifeni",
          site: "ifeanyianuebunwa.xyz",
          cardType: "summary_large_image",
        }}
      />

      <main className="container mx-auto h-auto">
        <abbr
          title="Igbo language: means Welcome"
          className="rounded-full py-2 px-3 border border-green-300 bg-green-100 bg-opacity-50 font-medium tracking-wider text-green-500 no-underline"
        >
          <div className="inline-block text-sm"></div> Nnọọ !
        </abbr>
        <h1 className="mt-4 text-lg font-bold"> いらっしゃいませ </h1>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <div className="col-span-1">
            <p className="mt-8">
              Hey there, I'm <b>Ifeanyi Anuebunwa!</b> I'm not just any
              Full-Stack developer; I'm your go-to Technology Lead with a knack
              for making cool stuff happen in the digital world. Over the past 5
              years, I've been busy crafting awesome software for all sorts of
              cool industries like Media & Communications, Web3, Real Estate,
              Fintech, and E-commerce. You name it, I've probably had a hand in
              it!
            </p>
          </div>
        </div>

        <h1 className="mb-4 mt-4 text-xl flex items-center gap-2 font-bold max-sm:mt-8">
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
          {featuredLinks.map((link) => (
            <div className="border bg-white border-dashed border-green-300 p-5">
              <div className="card  !max-md:px-2 !max-md:pt-2 !pb-0">
                <h3 className="font-bold">{link.title}</h3>
                <p className="text-secondary mt-0 text-sm">
                  {link.description}
                </p>
                <div className="pb-2 text-sm">
                  <Link className="font-medium" href={`https://${link.link}`}>
                    <span className="whitespace-pre-wrap">{link.link}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
