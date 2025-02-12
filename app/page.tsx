import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full flex sm:flex-row flex-col gap-0.5">
          <div className="bg-[url(/img/reten.jpg)] bg-cover h-screen sm:w-4/4 sm:bg-[93%_90%]"></div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
