export default function Adatkezeles() {
  return (
    <main className="max-w-3xl mt-8 mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Adatkezelési tájékoztató</h1>

      <p className="mb-4">
        A <strong>discreten.hu</strong> oldalon elérhető kapcsolatfelvételi
        űrlap használata során a látogatók nevét és e-mail címét kérem el
        kizárólag <strong>kapcsolatfelvétel céljából</strong>. Hírleveleket nem
        küldök, az adatokat marketing célra nem használom fel.
      </p>

      <p className="mb-4">
        Az űrlapon megadott adatokat maximum{" "}
        <strong>1 évig</strong> tárolom, ezt követően automatikusan törlésre
        kerülnek. A felhasználónak joga van kérni az adatainak{" "}
        <strong>módosítását vagy törlését</strong> a megadott e-mail címen
        keresztül bármikor.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Adatkezelő adatai</h2>
      <p className="mb-4">
        Név: <strong>Venczel Patrik Márk</strong>
        <br />
        E-mail: <strong>v.papatrik@gmail.com</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Adattovábbítás</h2>
      <p className="mb-4">
        A kapcsolatfelvételi űrlap beküldése után az adatok a{" "}
        <strong>Resend</strong> nevű e-mail továbbküldő szolgáltatáson keresztül
        jutnak el hozzám. Ennek technikai oka, hogy a{" "}
        <strong>Netlify</strong> tárhelyszolgáltató serverless rendszerben
        működik, így nem képes közvetlenül e-mailt küldeni. A Resend biztonságos
        API végpontján keresztül érkezik meg az üzenet a megadott magán e-mail
        címemre.
      </p>

      <p className="mb-4">
        A Resend szolgáltatás adatfeldolgozóként működik, az adattovábbítás
        célja kizárólag az üzenet kézbesítése.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Felhasználói jogok</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Hozzáférés a saját adatokhoz</li>
        <li>Az adatok módosításának kérése</li>
        <li>Az adatok törlésének kérése</li>
        <li>Adathordozhatósághoz való jog</li>
        <li>Jogorvoslathoz való jog a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH)</li>
      </ul>

      <p className="text-sm text-gray-500">
        Jelen tájékoztató 2025. július 11-én frissült. A jövőben a jogszabályi
        változásoknak megfelelően módosulhat.
      </p>
    </main>
  );
}
