import SideboxrBanner from "../components/SideboxBanner";

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
            <strong>
              A coaching két legfontosabb eszköze a figyelem és a kérdések
            </strong>
            , utóbbiak során sűrűn használjuk a kontextusváltást, hogy másképp
            lássunk rá az adott problémákra és lehetőségekre.
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
        <div className="container mx-auto px-4 py-8">
          <p className="mb-9">
            Ahogy Dungeons and Dragons szerepjátékokban megalkotott karakterek
            is a saját életünkben tapasztalthoz képest messze más problémákba
            ütköznek a kalandjaik során, úgy az elképzelt életünk felé lépdelve
            is új kihívásokba ütközhetünk, melyre a döntési mérleg coaching
            eszköz használatával jóval előre felkészülhetünk.
          </p>
          <p>
            A beszélgetések mellett ebben a kategóriában, apróbb
            szerepjátékokból megismert játékos elemet is felhasználunk, mint az
            ikonikus 20 oldalú kocka, és a vizualizációs módszerek segítségével
            mesés kontextusban közelítünk valóságos problémák megoldásaihoz.
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
