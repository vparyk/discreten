import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full flex lg:flex-row flex-col gap-0.5">
          <div className="relative lg:w-1/4 h-screen">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-[url(/img/gitar.jpg)] bg-cover h-full bg-[30%]"></div>
          </div>
          <div className="order-first lg:order-none h-screen lg:w-2/4">
            <div className="relative lg:h-1/2 lg:mb-0.5">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-[url(/img/grund2.png)] bg-cover h-full"></div>
            </div>
            <div className="relative bg-[url(/img/reten.jpg)] bg-cover h-screen lg:h-1/2 lg:bg-bottom order-first lg:order-none flex items-center justify-center">
              <div className="bg-black/50 text-white p-6 rounded-xl shadow-lg max-w-2xl text-center">
                <h2 className="text-2xl lg:text-4xl font-bold">
                  Kreatív coaching eszközökkel a korlátaidon túlra...
                </h2>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/4 h-screen">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-[url(/img/sup.jpg)] bg-cover h-full bg-[30%]"></div>
          </div>
        </div>

        <section className="h-screen">Teszt</section>
      </main>
      <footer></footer>
    </div>
  );
}
