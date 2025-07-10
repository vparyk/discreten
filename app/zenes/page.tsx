import Apply from "../components/Apply";
import Container from "../components/base/Container";
import SideboxrBanner from "../components/SideboxBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenés coaching – Discréten",
  description:
    "5 alkalmas coaching folyamat, ahol a handdrum és más hangszerek vizualizációs eszközként segítik a belső világod felfedezését. Zenei előképzettség nélkül is működik!",
  openGraph: {
    title: "Zenés coaching – Discréten",
    description:
      "Kreatív, meditatív coaching forma handdrum hangszerrel. A zene mint eszköz segíti a mélyebb önreflexiót, megértést és lelki egyensúlyt. 2025 szeptemberétől indul, előjelentkezés már lehetséges.",
    url: "https://discreten.hu/coaching/zenes",
    siteName: "Discréten",
    images: [
      {
        url: "https://discreten.hu/img/szoba.webp",
        width: 1200,
        height: 630,
        alt: "Zenés coaching – önismeret hangokon keresztül",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenés coaching – Hangokon át az önismerethez",
    description:
      "A zene mint önreflexiós és vizualizációs eszköz segít felfedezni belső világodat. Meditatív hangulat, handdrum, és támogatott önismereti út – zenés coaching Discréten módra.",
    images: ["https://discreten.hu/img/szoba.webp"],
  },
};

export default function Rolam() {
  return (
    <div>
      <main>
        <SideboxrBanner
          imageUrl="/img/szoba.webp"
          title="Zenes coaching"
          subtitle="5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli elakadások segítésére kreatív hangszeres eszközhasználattal"
        >
          <p>
            A zenés coaching során a hangszert nem hagyományos módon, hanem
            egyfajta <strong>vizualizációs és önkifejezési eszközként</strong>{" "}
            használjuk. Hasonlóan ahhoz, ahogy a coaching társasjátékok kártyái
            segítenek felszínre hozni mélyebb érzéseket és elakadásokat, a
            hangszer itt is a belső világ megértésének, kibontásának
            szolgálatába áll.
          </p>

          <p>
            Elsődlegesen handdrumot fogunk használni, hiszen a politonális
            hangszerekkel ellentétben, ezzel{" "}
            <strong>zenei előképzettség nélkül is</strong> lehetősége van
            bárkinek harmónikus dallamokat megszólaltatni, és meditatív hangzása
            biztonságos, nyugodt hangulatot teremt.
          </p>

          <p>
            <strong>
              A zenés coaching 2025 szeptemberétől indul, de az előzetes
              jelentkezés már lehetséges.
            </strong>
          </p>
        </SideboxrBanner>
        <Container>
          <p className="mb-5 text-lg">
            Ez a kreatív coaching típus ideális azok számára, akik:
          </p>
          <ul className="space-y-3 ml-5">
            <li>
              - Szívesen kapcsolódnának önmagukhoz hangokon és ritmusokon
              keresztül,
            </li>
            <li>
              - Kipróbálnák, milyen a coaching zenével vagy improvizatív
              hangszerekkel,
            </li>
            <li>
              - Keresik a nyugodt, támogató, mégis mélyre vezető önismereti
              formákat.
            </li>
          </ul>
        </Container>
        <Apply />
      </main>
      <footer></footer>
    </div>
  );
}
