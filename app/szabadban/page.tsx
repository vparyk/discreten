import SideboxrBanner from "../components/SideboxBanner";

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
        <div className="container mx-auto px-4 py-8">
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
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
