import Apply from "../components/Apply";
import Container from "../components/base/Container";
import SideboxrBanner from "../components/SideboxBanner";

export default function OnTheSup() {
  return (
    <div>
      <main>
        <SideboxrBanner
          imageUrl="/img/sup.webp"
          title="On The Sup coaching"
          subtitle="5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli elakadások segítésére, a vizen SUP-al lebegve"
        >
          <p>
            A szabadtéri coaching egy extrémebb változata, ahol a másfél órás
            coaching alkalmat egy <strong>25 perces evezéssel kezdjük.</strong>
          </p>

          <p>
            A természet közelsége és a mozgás segítenek fejben megérkezni, hogy
            azután a<strong> víztükrön lebegve</strong>, a supon egymás felé
            fordulva, a hagyományos kereteket tartva egy minőségi coaching
            alkalom jöhessen létre.
          </p>

          <p>
            <strong>Ez a kategória, csak nyáron jó idő esetén elérhető.</strong>
          </p>
        </SideboxrBanner>
        <Container>
          <p className="mb-9">
            Noha a komfortzónából kiszakadás fontos pontja a fejlődésnek, mégis
            ezt a kategóriát azoknak tudom ajánlani, akik biztonságban érzik
            magukat a víz közelségében.
          </p>
          <p>
            Kombináld a kategóriákat! Emellé a kategóra mellé érdemes egy
            beltéri opciót is választani, hogy rossz idő esetén is meg tudjuk
            tartani két hetenként az üléseket.
          </p>
        </Container>
        <Apply />
      </main>
      <footer></footer>
    </div>
  );
}
