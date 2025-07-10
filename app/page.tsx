import MainBanner from "./components/MainBanner";
import CategoriesBanner from "./components/CategoriesBanner";
import AboutMe from "./components/AboutMe";
import Coaching from "./components/Coaching";
import BannerTitle from "./components/BannerTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "discRéten – Life és Business Coaching",
  description:
    "Játék, mozgás és művészet alapú coaching eszközökkel támogatott önismereti és fejlődési folyamatok.",
  openGraph: {
    title: "discRéten – Life és Business Coaching",
    description:
      "Játék, mozgás és művészet alapú coaching eszközökkel támogatott önismereti és fejlődési folyamatok.",
    url: "https://discreten.hu",
    siteName: "discRéten",
    images: [
      {
        url: "https://discreten.hu/img/reten.webp",
        width: 1200,
        height: 630,
        alt: "Egy rét, fókuszban egy korlát, balra fa, hátul felhők és dombok",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "discRéten – Life és Business Coaching",
    description:
      "Játék, mozgás és művészet alapú coaching eszközökkel támogatott önismereti és fejlődési folyamatok.",
    images: ["https://discreten.hu/img/reten.webp"],
  },
};

export default function Home() {
  return (
    <div>
      <main>
        <MainBanner />
        <BannerTitle id="jelentkezem">Válassz a következők közül: </BannerTitle>
        <CategoriesBanner />
        <AboutMe />
        <Coaching />
      </main>
      <footer></footer>
    </div>
  );
}
