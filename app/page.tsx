import Image from "next/image";
import styles from "./page.module.css";
import NavLink from "./components/header/NavLink";
import MainBanner from "./components/MainBanner";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full flex lg:flex-row flex-col gap-0.5">
          <div className="relative h-[50vh] lg:w-1/4  lg:h-screen">
            <div className="relative bg-[url(/img/gitar.jpg)] bg-cover h-full bg-[30%] group">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <NavLink
                href="zenes"
                className="relative z-10 text-white top-3/5 transform -translate-y-1/2 ml-5 block lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <h2 className="text-white opacity-100 underline">Zenés</h2>
                <h2 className="ml-5 opacity-40">Coaching</h2>
              </NavLink>
              <NavLink
                href="verses"
                className="relative z-10 text-white top-4/5 transform -translate-y-1/2 text-right mr-5 block lg:opacity-0  group-hover:opacity-100 transition-opacity duration-500"
              >
                <h2 className="text-white opacity-100 mr-12 underline">
                  Verses
                </h2>
                <h2 className=" opacity-40">Coaching</h2>
              </NavLink>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-2/4 flex flex-col">
            <div className="relative h-[50vh] lg:h-1/2 lg:mb-0.5 group  mt-0.5 lg:mt-0">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-[url(/img/grund2.png)] bg-cover h-full flex items-end justify-between pb-8 px-3">
                <NavLink
                  href="tarsas"
                  className="relative z-10 text-white ml-5 block mb-16 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <h2 className="text-white opacity-100 underline">
                    Társasjáték
                  </h2>
                  <h2 className="ml-5 opacity-40">Coaching</h2>
                </NavLink>
                <NavLink
                  href="d20"
                  className="relative z-10 text-white text-right mr-5 block lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <h2 className="text-white opacity-100 mr-4 underline">
                    Szerepjáték
                  </h2>
                  <h2 className=" opacity-40">Coaching</h2>
                </NavLink>
              </div>
            </div>
            <MainBanner />
          </div>
          <div className="relative lg:w-1/4 h-[50vh] lg:h-screen group">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-[url(/img/sup.webp)] bg-cover h-full bg-[30%]">
              <NavLink
                href="szabadban"
                className="relative z-10 text-white top-3/5 transform -translate-y-1/2 ml-5 block lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <h2 className="text-white opacity-100 underline">Szabadban</h2>
                <h2 className="ml-5 opacity-40">Coaching</h2>
              </NavLink>
              <NavLink
                href="onthesup"
                className="relative z-10 text-white top-4/5 transform -translate-y-1/2 text-right mr-5 block lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <h2 className="text-white opacity-100 mr-12 underline">
                  On the SUP
                </h2>
                <h2 className=" opacity-40">Coaching</h2>
              </NavLink>
            </div>
          </div>
        </div>

        <section className="h-screen">Teszt</section>
      </main>
      <footer></footer>
    </div>
  );
}
