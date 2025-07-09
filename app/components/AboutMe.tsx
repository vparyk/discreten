import SideboxBanner from "./SideboxBanner";

export default function AboutMe() {
  return (
    <div id="rolam" className="border-t-2 border-white ">
      <SideboxBanner
        imageUrl="/img/profil.webp"
        title="Rólam"
        subtitle="Venczel Patrik Márk- webfejlesztő és coach"
      >
        <p>
          8 éve dolgozom fejlesztőként, de már a szakmai pályám korai
          szakaszában világossá vált számomra, hogy a legnagyobb hozzáadott
          értéket azokban a helyzetekben tudom nyújtani, amikor másokat
          támogathatok legyen szó mentorálásról,{" "}
          <strong>elakadások közös megoldásáról</strong> vagy személyes
          fejlődésük segítéséről.
        </p>

        <p>
          A coaching területén ez a támogató attitűd strukturált és célorientált
          formát nyert. Tapasztalatomat kiegészíti két évtizednyi aktív
          cserkészmúltam, ahol a <strong>természetközeliség</strong> és
          közösségépítés kiemelt szerepet játszott, valamint a{" "}
          <strong>művészetekhez és mozgáshoz</strong> fűződő hosszú távú
          kapcsolatom. Ezek az elemek mára a coaching eszköztárában is helyet
          kaptak, segítve az önismeret elmélyítését és az alternatív
          szemléletmódok kialakítását.
        </p>

        <p>
          A fejlesztés, játék és <strong>kreatív gondolkodás</strong>{" "}
          integrálása a coachingfolyamatba lehetővé teszi számomra, hogy sokrétű
          módszerekkel, mégis emberközpontúan támogassam azokat, akik
          elakadásokkal, döntési helyzetekkel vagy változási igénnyel érkeznek.
        </p>
      </SideboxBanner>
    </div>
  );
}
