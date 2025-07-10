import MainBanner from "./components/MainBanner";
import CategoriesBanner from "./components/CategoriesBanner";
import AboutMe from "./components/AboutMe";
import Coaching from "./components/Coaching";
import BannerTitle from "./components/BannerTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discréten - Life és Business Coaching",
  description:
    "Játék, mozgás és művészet alapú coaching eszközökkel támogatott önismereti és fejlődési folyamatok.",
  openGraph: {
    title: "Discréten Life és Business Coaching",
    description:
      "Játék, mozgás és művészet alapú coaching eszközökkel támogatott önismereti és fejlődési folyamatok.",
    url: "https://discreten.hu",
    siteName: "Discréten",

    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discréten Life és Business Coaching",
    description:
      "Játék, mozgás és művészet alapú coaching eszközökkel támogatott önismereti és fejlődési folyamatok.",
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
