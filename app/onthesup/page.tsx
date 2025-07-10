import Apply from "../components/Apply";
import Container from "../components/base/Container";
import SideboxrBanner from "../components/SideboxBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On The Sup Coaching – Szabadtéri coaching a vízen",
  description:
    "5 alkalmas coaching folyamat SUP-on, a természetben. Munkahelyi és személyes elakadások támogatása mozgással és jelenléttel – nyáron, jó időben.",
  openGraph: {
    title: "On The Sup Coaching – Szabadtéri coaching a vízen",
    description:
      "5 alkalmas coaching folyamat SUP-on, a természetben. Munkahelyi és személyes elakadások támogatása mozgással és jelenléttel – nyáron, jó időben.",
    url: "https://discreten.hu/onthesup",
    siteName: "Discréten",
    images: [
      {
        url: "https://discreten.hu/img/sup.webp",
        width: 1200,
        height: 630,
        alt: "Coaching SUP deszkán a vízen",
      },
    ],
    locale: "hu_HU",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "On The Sup Coaching – Szabadtéri coaching SUP-pal",
    description:
      "Munkahelyi és személyes elakadások támogatása a természet közelségében, SUP deszkán lebegve – 5 alkalmas coaching folyamat.",
    images: ["https://discreten.hu/img/sup.webp"],
  },
};

export default function OnTheSup() {
  return (
    <div>
      <main>
        <SideboxrBanner
          imageUrl="/img/sup.webp"
          title="On The Sup coaching"
          subtitle="5 alkalmas segítő beszélgetés munkahelyi és személyes életbeli elakadások segítésére, a vízen SUP-al lebegve"
        >
          <p>
            A szabadtéri coaching egy extrémebb változata, ahol a másfél órás
            coaching alkalmat egy <strong>25 perces evezéssel kezdjük.</strong>
          </p>

          <p>
            A természet közelsége és a mozgás segítenek fejben megérkezni, hogy
            azután a<strong> víztükrön lebegve</strong>, a SUP-on egymás felé
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
            Kombináld a kategóriákat! Emellé a kategória mellé érdemes egy
            beltéri opciót is választani, hogy rossz idő esetén is meg tudjuk
            tartani kéthetente az üléseket.
          </p>
        </Container>
        <Apply />
      </main>
      <footer></footer>
    </div>
  );
}
