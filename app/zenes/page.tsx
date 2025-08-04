import Apply from "../components/Apply";
import Container from "../components/base/Container";
import SemiBold from "../components/base/SemiBold";
import SideboxrBanner from "../components/SideboxBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenés coaching – discRéten",
  description:
    "5 alkalmas coaching folyamat, ahol a hangdrum és más hangszerek vizualizációs eszközként segítik a belső világod felfedezését. Zenei előképzettség nélkül is működik!",
  openGraph: {
    title: "Zenés coaching – discRéten",
    description:
      "Kreatív, meditatív coaching forma hangdrum hangszerrel. A zene mint eszköz segíti a mélyebb önreflexiót, megértést és lelki egyensúlyt. 2025 szeptemberétől indul, előjelentkezés már lehetséges.",
    url: "https://discreten.hu/coaching/zenes",
    siteName: "discRéten",
    images: [
      {
        url: "https://discreten.hu/img/szoba.webp",
        width: 1200,
        height: 630,
        alt: "Egy szoba, középen egy gitár, hátul kanapé, polcokon társasjátékok, elől asztal, jobbra babzsákfotel",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenés coaching – Hangokon át az önismerethez",
    description:
      "A zene mint önreflexiós és vizualizációs eszköz segít felfedezni belső világodat. Meditatív hangulat, hangdrum, és támogatott önismereti út – zenés coaching discRéten módra.",
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
          alt="Egy szoba, középen egy gitár, hátul kanapé, polcokon társasjátékok, elől asztal, jobbra babzsákfotel"
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
            Elsődlegesen hangdrumot fogunk használni, hiszen a politonális
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
          <p className=" text-lg">
            Ez a kreatív coaching típus ideális azok számára, akik:
          </p>
          <ul className="space-y-3 ml-5">
            <li>
              - Szívesen kapcsolódnának önmagukhoz hangokon és ritmusokon
              keresztül,
            </li>
            <li>
              - Kipróbálnák, milyen a <SemiBold>coaching zenével</SemiBold> vagy
              improvizatív hangszerekkel,
            </li>
            <li>
              - Keresik a <SemiBold>nyugodt, támogató,</SemiBold> mégis mélyre
              vezető önismereti formákat.
            </li>
          </ul>
        </Container>
        <Apply initialSelected="Zenés coaching" />
      </main>
      <footer></footer>
    </div>
  );
}
