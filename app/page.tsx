import MainBanner from "./components/MainBanner";
import CategoriesBanner from "./components/CategoriesBanner";
import AboutMe from "./components/AboutMe";
import Coaching from "./components/Coaching";
import BannerTitle from "./components/BannerTitle";

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
