import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className="bg-[url(/img/reten.jpg)] bg-cover h-screen w-full"></div>
      </main>
      <footer></footer>
    </div>
  );
}
