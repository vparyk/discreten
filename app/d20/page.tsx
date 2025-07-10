import Apply from "../components/Apply";
import Container from "../components/base/Container";
import SemiBold from "../components/base/SemiBold";
import SideboxrBanner from "../components/SideboxBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szerepjátékos Coaching – Discréten D20",
  description:
    "5 alkalmas coaching folyamat, amely fantáziavilágban játszódó szerepjátékos elemekkel segít rálátni a valós problémákra és célokra.",
  openGraph: {
    title: "Szerepjátékos Coaching – D20 módszer",
    description:
      "A coaching során egy elképzelt karaktert és világot használunk, hogy új nézőpontból vizsgálhassuk meg elakadásaidat és lehetőségeidet. Játékos, mégis célirányos támogatás.",
    url: "https://discreten.hu/coaching/d20",
    siteName: "Discréten",
    images: [
      {
        url: "https://discreten.hu/img/d20.webp",
        width: 1200,
        height: 630,
        alt: "Szerepjátékos coaching illusztráció – D20 kocka",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szerepjátékos Coaching – Discréten D20",
    description:
      "Szerepjátékos eszközökkel támogatott coaching, ahol elképzelt karaktered segít elérni céljaidat – fantáziával és fókuszált kérdésekkel.",
    images: ["https://discreten.hu/img/d20.webp"],
  },
};

export default function D20() {
  return (
    <div>
      <main>
        <SideboxrBanner
          imageUrl="/img/d20.webp"
          title="Szerepjátékos coaching"
          subtitle="5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli elakadások segítésére, szerepjáték eszközhasználattal"
        >
          <p>
            A coaching két legfontosabb eszköze a{" "}
            <strong>figyelem és a kérdések</strong>, utóbbiak során sűrűn
            használjuk a kontextusváltást, hogy másképp lássunk rá az adott
            problémákra és lehetőségekre.
          </p>

          <p>
            <strong>A D20 coaching kezdetén</strong> az ügyfél kitölt egy
            karakterlapot a tervei megvalósításához legoptimálisabb elképzelt
            énje alapján, melyet egy fantáziavilágba belehelyezve teszünk még
            távolibb kontextusba.
          </p>

          <p>
            <strong>A célirányos coachingoktól</strong> megszokott módon, az
            ügyfél problémái és elakadásai alapján célokat fogalmazunk meg, majd
            a későbbi ülések során a megalkotott karaktert fogjuk különféleképp
            felhasználni.
          </p>
        </SideboxrBanner>
        <Container>
          <p className="mb-9">
            Ahogy Dungeons and Dragons szerepjátékokban megalkotott karakterek
            is a saját életünkben tapasztalthoz képest messze más problémákba
            ütköznek a kalandjaik során, úgy az elképzelt életünk felé lépdelve
            is új kihívásokba ütközhetünk, melyre a{" "}
            <SemiBold>döntési mérleg</SemiBold> coaching eszköz használatával
            jóval előre felkészülhetünk.
          </p>
          <p>
            A beszélgetések mellett ebben a kategóriában, apróbb
            szerepjátékokból megismert játékos elemet is felhasználunk, mint az
            ikonikus <SemiBold>20 oldalú kocka</SemiBold>, és a vizualizációs
            módszerek segítségével mesés kontextusban közelítünk valóságos
            problémák megoldásaihoz.
          </p>
        </Container>
        <Apply />
      </main>
      <footer></footer>
    </div>
  );
}
