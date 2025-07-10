import Apply from "../components/Apply";
import Container from "../components/base/Container";
import SideboxrBanner from "../components/SideboxBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching a szabadban – Természetközeli támogatás Discréten módra",
  description:
    "5 alkalmas coaching folyamat a természetben: vízparton, erdei ösvényeken vagy parkokban, ahol a friss levegő és nyugodt környezet támogatja az önreflexiót és tisztánlátást.",
  openGraph: {
    title: "Coaching a szabadban – Discréten",
    description:
      "Szabadtéri coaching vízparton vagy természetes környezetben. A friss levegő és a mozgás elősegítik a gondolatok rendezését, miközben támogatást kapsz elakadásaid feldolgozásában.",
    url: "https://discreten.hu/coaching/szabadban",
    siteName: "Discréten",
    images: [
      {
        url: "https://discreten.hu/img/reten.webp",
        width: 1200,
        height: 630,
        alt: "Szabadtéri coaching a természetben – pokróc a fűben",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching a szabadban – Természetes keretek között",
    description:
      "Személyes és munkahelyi elakadások feldolgozása parkban, vízparton vagy erdei sétán – a természet erejével támogatva.",
    images: ["https://discreten.hu/img/reten.webp"],
  },
};

export default function Rolam() {
  return (
    <div>
      <main>
        <SideboxrBanner
          imageUrl="/img/reten.webp"
          title="Coaching a szabadban"
          subtitle="5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli elakadások segítésére vízparton vagy természetben"
        >
          <p>
            11 éves korom óta cserkész vagyok, így a természet szeretete már
            fiatal korom óta kiemelt szerepet tölt be az életemben.
          </p>

          <p>
            Nagy örömmel töltött el, mikor megtudtam, hogy a coaching nemcsak
            négy fal között működhet, hanem a természetben is, ráadásul számos
            előnnyel! A szabadtéri coaching ülések{" "}
            <strong>friss levegőn, nyugodt környezetben</strong> zajlanak, ami
            segíti a gondolatok tisztulását és a mélyebb önreflexiót.
          </p>

          <p>
            Parkokban, Duna-parton, vagy Budapest közeli erdei ösvényeken{" "}
            <strong>sétálgatva</strong>, vagy hagyományos módon egymással
            szemben egy pokrócon <strong>üldögélve</strong>, életbeli vagy
            munkahelyi problémákon és elakadásokon dolgozva kell elképzelni ezt
            a kategóriát.
          </p>
        </SideboxrBanner>
        <Container>
          <p className="mb-9">
            Mivel az időjárás kiszámíthatatlan, ehhez a lehetőséghez érdemes egy
            beltéri coaching típust is választani, hogy az előre egyeztetett,
            kétheti rendszerességű alkalmakat eső esetén is biztosítani tudjuk.
          </p>
          <p>
            Az ország távolabbi pontjain élők számára is szeretném elérhetővé
            tenni ezt az élményt, ezért nyitott vagyok egy különleges hibrid
            formára is. Ha te is szeretsz kirándulni, akár online
            videókapcsolaton keresztül is tarthatunk szabadtéri coachingot,
            mindketten a saját kedvenc zöld helyünkről becsatlakozva.
          </p>
        </Container>
        <Apply />
      </main>
      <footer></footer>
    </div>
  );
}
