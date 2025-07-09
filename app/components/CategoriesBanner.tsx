import BannerNavLink from "./BannerNavLink";
import NavLink from "./header/NavLink";

export default function CategoriesBanner({}) {
  return (
    <div className="border-t-3 border-white">
      <div className="w-full flex lg:flex-row flex-col gap-0.5">
        {/* Kis oszlop (1/3) */}
        <div className="lg:w-1/3 w-full flex flex-col gap-0.5">
          {/* Társasjáték & Szerepjáték */}
          <div className="relative h-[35vh] lg:h-[50vh] group overflow-hidden">
            <div className="bg-[url(/img/grund2.webp)] bg-cover h-full flex items-end justify-between">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <BannerNavLink
                href="tarsas"
                title="Társasjáték"
                className="mb-10 lg:mb-24 bg-ground!"
              />
              <BannerNavLink
                href="d20"
                title="Szerepjáték"
                className="mb-4 lg:mb-13"
                isRight={true}
              />
            </div>
          </div>
          {/* Zenés & Verses */}
          <div className="relative h-[45vh] lg:h-[50vh] group overflow-hidden">
            <div className="bg-[url(/img/sup.webp)] bg-cover flex items-end justify-between h-full bg-[30%]">
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <BannerNavLink
                href="szabadban"
                title="Szabadban"
                className="mb-10 lg:mb-24 bg-ground!"
              />
              <BannerNavLink
                href="onthesup"
                title="On the SUP"
                className="mb-4 lg:mb-13"
                isRight={true}
              />
            </div>
          </div>
        </div>
        {/* Nagy oszlop (2/3) */}
        <div className="lg:w-2/3 w-full flex flex-col gap-0.5 overflow-hidden">
          <div className="relative h-[35vh] lg:h-full group">
            <div className="relative bg-[url(/img/szoba2.webp)] bg-cover flex items-end justify-between h-full bg-[60%]">
              <div className="absolute inset-0 bg-black opacity-40 lg:opacity-0"></div>
              <div>
                <BannerNavLink
                  href="coaching"
                  title="Klasszikus"
                  className="mb-4 lg:mb-45 bg-ground! rounded-br-2xl!"
                />
                <BannerNavLink
                  href="verses"
                  title="Verses"
                  className="mb-4 lg:mb-30 bg-deep!"
                />
              </div>
              <BannerNavLink
                href="zenes"
                title="Zenés"
                className="mb-8 lg:mb-41"
                isRight={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
