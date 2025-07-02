import MainBanner from "./components/MainBanner";
import CategoriesBanner from "./components/CategoriesBanner";

export default function Home() {
  return (
    <div>
      <main>
        <MainBanner />
        <CategoriesBanner />
      </main>
      <footer></footer>
    </div>
  );
}
