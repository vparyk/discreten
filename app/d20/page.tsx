export default function Rolam() {
  return (
    <div>
      <main>
        <div className="flex flex-col 2xl:flex-row w-full">
          {/* Kép arányos megjelenítése */}
          <div className="w-full lg:h-[85vh] xl:aspect-[4/3] relative 2xl:h-screen xl:h-[85vh]">
            <img
              src="/img/d20.webp"
              alt="D20 coaching"
              className="object-cover object-bottom w-full h-full"
            />
            {/* Szöveg a képen – csak desktopon látható */}
            <div className="hidden 2xl:flex absolute inset-0 bg-black/30 items-center justify-start px-16">
              <div className="text-white max-w-xl">
                <h1 className="text-4xl font-bold drop-shadow-lg">
                  Szerepjátékos (D20) coaching
                </h1>
                <p className="mt-4 text-lg drop-shadow">
                  5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli
                  elakadások segítésére, szerepjáték eszközhasználattal
                </p>
              </div>
            </div>
          </div>

          {/* Mobil szöveges blokk a kép alatt */}
          <div className="2xl:hidden bg-white py-6 pb-8 px-4 text-center">
            <h1 className="text-xl font-bold text-gray-900">
              Szerepjátékos (D20) coaching
            </h1>
            <p className="mt-3 text-gray-700">
              5 alkalmas segítő beszélgetés szerepjáték eszközhasználattal
            </p>
          </div>

          {/* Szövegdoboz – jobbra desktopon, alul mobilon */}
          <div className="w-full bg-rosemary p-10 flex items-center text-white 2xl:border-l-2">
            <div className="space-y-4 text-base leading-relaxed max-w-lg flex flex-col gap-6 m-4">
              <p>
                <strong>
                  A coaching két legfontosabb eszköze a figyelem és a kérdések
                </strong>
                , utóbbiak során sűrűn használjuk a kontextusváltást, hogy
                másképp lássunk rá az adott problémákra és lehetőségekre.
              </p>

              <p>
                <strong>A D20 coaching kezdetén</strong> az ügyfél kitölt egy
                karakterlapot a tervei megvalósításához legoptimálisabb
                elképzelt énje alapján, melyet egy fantáziavilágba belehelyezve
                teszünk még távolibb kontextusba.
              </p>

              <p>
                <strong>A célirányos coachingoktól</strong> megszokott módon, az
                ügyfél problémái és elakadásai alapján célokat fogalmazunk meg,
                majd a későbbi ülések során a megalkotott karaktert fogjuk
                különféleképp felhasználni.
              </p>
            </div>
          </div>
        </div>

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
