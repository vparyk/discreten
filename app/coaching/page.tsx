import Apply from "../components/Apply";
import SemiBold from "../components/base/SemiBold";
import SideboxrBanner from "../components/SideboxBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "discRéten Coaching – Támogatás változáshoz és fejlődéshez",
  description:
    "Személyes és szakmai elakadások oldása mozgás-, játék- és művészetalapú coaching eszközökkel, támogató jelenléttel, struktúrával.",
  openGraph: {
    title: "discRéten – Coaching",
    description:
      "A coaching során kérdésekkel és figyelemmel támogatott folyamatban fedezheted fel a saját megoldásaidat, akár fantáziavilág, természet, mozgás vagy szerepjáték segítségével.",
    url: "https://discreten.hu/coaching",
    siteName: "discRéten",
    images: [
      {
        url: "https://discreten.hu/img/szoba2.webp",
        width: 1200,
        height: 630,
        alt: "Elől egy hatalmas monstera, körülötte sok másik növény, hátul egy kanapé, polcokon társasjátékok",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "discRéten – Coaching",
    description:
      "Fókuszált figyelemmel, strukturált kérdésekkel és kreatív eszközökkel támogatott coaching folyamatok – a változásért.",
    images: ["https://discreten.hu/img/szoba2.webp"],
  },
};

export default function Coaching() {
  return (
    <div>
      <main>
        <SideboxrBanner
          imageUrl="/img/szoba2.webp"
          title="Coaching"
          subtitle="5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli elakadások segítésére"
          alt="Elől egy hatalmas monstera, körülötte sok másik növény, hátul egy kanapé, polcokon társasjátékok"
        >
          <p>
            A coaching egy strukturált, célorientált fejlesztési folyamat, amely
            során a coach támogató párbeszéd révén segíti az ügyfelet
            elakadások, élethelyzeti nehézségek vagy munkahelyi kihívások
            feldolgozásában. A fókusz a jelenen és a jövőn van: a hangsúly a
            lehetőségek feltárásán, a meglévő erőforrások mozgósításán és a{" "}
            <strong>konkrét célok felé vezető úton</strong> helyezkedik el.
          </p>
          <p>
            Az általam alkalmazott szupervízió-alapú coachingmódszer különösen
            nagy hangsúlyt fektet az érzelmek tudatosítására, az{" "}
            <strong>önreflexió fejlesztésére</strong> és a belső perspektívák
            feltérképezésére. A folyamat alapját az{" "}
            <strong>aktív figyelem</strong> és a jól irányzott{" "}
            <strong>kérdések</strong> adják. Bár a beszélgetések során
            alkalmanként megjelenhet a coach személyes nézőpontja vagy egy-egy
            edukatív elem, ezek szerepe tudatosan korlátozott, a coaching
            ugyanis nem tanácsadás és nem mentorálás.
          </p>
        </SideboxrBanner>
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          <p>
            A folyamat során az ügyfél múltbeli tapasztalataira, meglévő
            erősségeire, vagy korábban látott működő mintákra építünk. Ehhez
            vizuális és játékos eszközöket is használok, például
            viselkedéstipológiákat vagy asszociációs technikákat, amelyek
            támogatják az <SemiBold>érzelmek kifejezését</SemiBold> és segítik a
            perspektívaváltást, ezáltal elmélyítik az önreflexiót.
          </p>
          <p>
            A coaching nem terápiás folyamat. Nem dolgozunk fel diagnosztizált
            mentális zavarokat, személyiségzavarokat vagy más patológiás
            problémákat. A múltat csak annyiban érintjük, amennyiben az segíti a
            jelen megértését és a jövő tervezését. A coaching célja az
            erőforrások mozgósítása és a működő megoldások kialakítása, így
            ideális eszköz lehet kisebb{" "}
            <SemiBold>elakadások áthidalására</SemiBold>, döntési helyzetek
            tisztázására vagy fejlődési irányok megtalálására. Mélyebb, hosszabb
            távú személyiségbeli változások eléréséhez a pszichoterápiás
            folyamatok kínálnak megfelelőbb keretet.
          </p>
        </div>
        <Apply initialSelected="Klasszikus coaching" />
      </main>
      <footer></footer>
    </div>
  );
}
