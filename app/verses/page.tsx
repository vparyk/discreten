import Apply from "../components/Apply";
import Container from "../components/base/Container";
import SideboxrBanner from "../components/SideboxBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verses coaching – Discréten",
  description:
    "5 alkalmas coaching folyamat kreatív verses módszerrel. A hős útja történetív mentén dolgozunk, hogy alkotáson keresztül találj megoldásokat személyes és munkahelyi elakadásokra.",
  openGraph: {
    title: "Verses coaching – Discréten",
    description:
      "A kreatív írás és a coaching ötvözete. Témák, fordulatok, megoldások és versek, amelyek évekkel később is emlékeztetnek saját erődre. Ideális azoknak, akik szeretik az önreflexiót és az alkotást.",
    url: "https://discreten.hu/coaching/verses",
    siteName: "Discréten",
    images: [
      {
        url: "https://discreten.hu/img/verses.webp",
        width: 1200,
        height: 630,
        alt: "Verses coaching – alkotás és önreflexió kreatív eszközökkel",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verses coaching – Alkotás az önismeret szolgálatában",
    description:
      "Kreatív írás, coaching és belső fejlődés ötvözete. A hős útján haladva versek segítenek feldolgozni és megérteni az elakadásokat. Fedezd fel az alkotásban rejlő erőt.",
    images: ["https://discreten.hu/img/verses.webp"],
  },
};

export default function Verses() {
  return (
    <div>
      <main>
        <SideboxrBanner
          imageUrl="/img/verses.webp"
          title="Verses coaching"
          subtitle="5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli elakadások segítésére, kreatív verses módszerrel"
        >
          <p>
            Mint sokan mások, én is korán ráébredtem, milyen felszabadító érzés
            magamból <strong>kiírni a mélyebb érzelmeket </strong>, de csak
            később vettem észre, hogy amikor a karaktereim eljutnak egy
            megoldásig, az rám is sokkal pozitívabban hat.
          </p>

          <p>
            Később a tanulmányaim is megerősítették ezt a szemléletet, hiszen a
            segítő szakmák egyik alapelve, hogy az ügyfelet előre mozdítsuk, ne
            csupán teret adjunk az érzelmek heti szintű kiáradásának.
          </p>

          <p>
            Ez a kategória igazi csemege lehet azoknak, akik szívesen töltik az
            idejüket <strong>kreatív tevékenységekkel </strong> az önfejlesztés
            szeretete mellet.
          </p>
        </SideboxrBanner>
        <Container>
          <p>
            A verses coachingban a klasszikus „hős útja” történetív mentén
            dolgozunk, amit gyerekkorunk meséiből jól ismerhetünk. Ez a
            megközelítés remekül kiegészíti a célorientált coachingot
          </p>

          <p>
            Egy-egy alkalom során közösen feltérképezünk egy témát: megnézzük a
            kihívásokat, a lehetséges fordulatokat és megoldási irányokat. Az
            ülés végére megszületik egy konkrét megoldásötlet, amit az ügyfél
            otthon versbe foglal vizualizációs eszközök segítségével.
          </p>

          <p>
            A következő találkozón együtt elemezzük a született verset, és
            megnézzük, hogyan sikerült azt a valóságban is megvalósítani. A vers
            nemcsak alkotás, hanem emlékeztető is: erősíti a cselekvőképességet,
            és évekkel később is visszavezethet az elhatározásokhoz.
          </p>
          <p>
            Kombináld a kategóriákat! Emellé a kategória mellé érdemes egy
            beltéri opciót is választani, hogy rossz idő esetén is meg tudjuk
            tartani kéthetente az üléseket.
          </p>

          <p>
            Akkor is bátran kipróbálhatod ezt a coaching típusát, ha kevésbé
            érzed magad művészi beállítottságúnak, ChatGPT vagy más mesterséges
            intelligencia is segítségedre lehet az alkotásban. Hiszen ez a vers
            elsősorban neked készül: hogy támogasson, erőt adjon, és segítsen
            kapcsolódni a belső önbizalmadhoz. Nem kell megosztanod másokkal, ez
            a te belső munkád része.
          </p>
          <p>
            Ha viszont úgy érzed, hogy a saját munkádból elkészült mű igazán jól
            sikerült, és szeretnéd elszavalni vagy megtanulni, az is szuper
            lehetőség az épülésre. Vannak barátságos, befogadó slam poetry
            estek, ahol örömmel látják az új hangokat. Érdemes azonban várni pár
            hetet a megosztással, így a vers hatása belül is mélyebbre érhet,
            mielőtt a külső visszajelzések elterelnék a figyelmedet a saját
            élményedről.
          </p>
          <p>
            Ha pedig mesterséges intelligencia segítségével készült a vers,
            kérlek, tartsd tiszteletben a többi fellépő munkáját, és ne használd
            nyilvános szereplésre. Az önismeret útján a legfontosabb közönség
            úgyis te magad vagy.
          </p>
        </Container>
        <Apply />
      </main>
      <footer></footer>
    </div>
  );
}
