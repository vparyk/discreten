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
    siteName: "discRéten",
    images: [
      {
        url: "https://discreten.hu/img/sup.webp",
        width: 1200,
        height: 630,
        alt: "Piros SUP deszka a vízen és úszó növények",
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
          alt="Piros SUP deszka a vízen és úszó növények"
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
            Ez a kategória, <strong>csak nyáron</strong> jó idő esetén elérhető.
          </p>
        </SideboxrBanner>
        <Container>
          <p>
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
        <Apply initialSelected="On the SUP coaching" />
      </main>
      <footer></footer>
    </div>
  );
}
