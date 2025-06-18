import SideboxrBanner from "../components/SideboxBanner";

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
        <div className="container mx-auto px-4 py-8">
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
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
