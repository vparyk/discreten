import Apply from "../components/Apply";
import Caption from "../components/Caption";
import SideboxrBanner from "../components/SideboxBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Társasjáték coaching – discRéten",
  description:
    "5 alkalmas coaching folyamat társasjátékos és rendszertáblás eszközhasználattal. Perspektívaváltás, vizualizáció és mélyebb megértés játékos keretek között.",
  openGraph: {
    title: "Társasjáték coaching – discRéten",
    description:
      "A társasjáték mint vizualizációs eszköz segít új szemszögből ránézni elakadásaidra. Használjuk a figurákat, kártyákat és rendszertáblát, hogy kreatívan támogassuk az önismereti folyamatot.",
    url: "https://discreten.hu/coaching/tarsasjatek",
    siteName: "discRéten",
    images: [
      {
        url: "https://discreten.hu/img/grund2.webp",
        width: 1200,
        height: 630,
        alt: "Cerebria társasjáték színes figurái egy asztalon, háttérben egy kert sok fával",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Társasjáték coaching – Perspektívaváltás játékosan",
    description:
      "A coaching során játékos eszközökkel támogatjuk a problémák újraértelmezését. A társasjátékok figurái és kártyái segítenek a mélyebb belső munkában.",
    images: ["https://discreten.hu/img/grund2.webp"],
  },
};

export default function Tarsas() {
  return (
    <div>
      <main>
        <SideboxrBanner
          imageUrl="/img/cerebria.webp"
          title="Társasjáték coaching"
          subtitle="5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli elakadások segítésére, társasjáték és rendszertábla eszközhasználattal"
          titlePosition="first-third"
          caption={
            <Caption text="Figurák a Mindclash Games Cerebria társasjátékból, melyek coaching eszközként is kiválóan alkalmazhatóak." />
          }
          alt="Cerebria társasjáték színes figurái egy asztalon, háttérben egy kert sok fával"
        >
          <p>
            <strong>
              A társasjáték a coachingban mint vizualizációs eszköz
            </strong>{" "}
            van jelen. Főleg a játékok kártyáinak képeit használjuk, hogy az
            érzések kifejezésének könnyítésére, vagy a figurákat, hogy
            perspektíva váltással segítsük az ügyfél céljai szerinti
            leghatékonyabb lehetőségei megtalálását.
          </p>

          <p>
            A coaching két legfontosabb eszköze a{" "}
            <strong>figyelem és a kérdések </strong>, utóbbiak során sűrűn
            használjuk a kontextusváltást, hogy másképp lássunk rá az adott
            problémákra és lehetőségekre, melyre a társasjátékok és a
            rendszertábla kiváló eszköznek bizonyulnak.
          </p>
        </SideboxrBanner>
        <Apply initialSelected="Társasjáték coaching" />
      </main>
      <footer></footer>
    </div>
  );
}
