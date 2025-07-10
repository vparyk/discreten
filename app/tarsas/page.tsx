import Apply from "../components/Apply";
import Caption from "../components/Caption";
import SideboxrBanner from "../components/SideboxBanner";

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
        >
          <p>
            <strong>
              A társasjáték a coachingban, mint vizualizációs eszköz
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
            rendszertábla kiválló eszköznek bizonyulnak.
          </p>
        </SideboxrBanner>
        <Apply />
      </main>
      <footer></footer>
    </div>
  );
}
