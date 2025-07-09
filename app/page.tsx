import MainBanner from "./components/MainBanner";
import CategoriesBanner from "./components/CategoriesBanner";

export default function Home() {
  return (
    <div>
      <main>
        <MainBanner />
        <div
          id="jelentkezem"
          className="flex justify-center bg-deep p-[10px] mt-[3px] scroll-mt-18 xl:scroll-mt-24"
        >
          <span className="-rotate-9 z-60 border-2 border-white lg:text-lg font-semibold uppercase italic text-gray-800 bg-ground p-2 px-6 rounded-lg text-white">
            Válassz a következők közül:
          </span>
        </div>
        <CategoriesBanner />
      </main>
      <footer></footer>
    </div>
  );
}
