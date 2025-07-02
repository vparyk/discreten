import NavLink from "./header/NavLink";

export default function CategoriesBanner({}) {
  return (
    <div className="border-t-3 border-white">
      <div className="w-full flex lg:flex-row flex-col gap-0.5">
        {/* Kis oszlop (1/3) */}
        <div className="lg:w-1/3 w-full flex flex-col gap-0.5">
          {/* Társasjáték & Szerepjáték */}
          <div className="relative h-[35vh] lg:h-[50vh] group">
            <div className="bg-[url(/img/grund2.png)] bg-cover h-full flex items-end justify-between pb-8 px-3">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <NavLink
                href="tarsas"
                className="relative z-10 text-white ml-5 block mb-16 transition-transform duration-200 hover:scale-110 focus:scale-110"
              >
                <h2 className="text-white opacity-100 underline">
                  Társasjáték
                </h2>
                <h2 className="ml-5 opacity-40">Coaching</h2>
              </NavLink>
              <NavLink
                href="d20"
                className="relative z-10 text-white text-right mr-5 block transition-transform duration-200 hover:scale-110 focus:scale-110"
              >
                <h2 className="text-white opacity-100 mr-4 underline">
                  Szerepjáték
                </h2>
                <h2 className=" opacity-40">Coaching</h2>
              </NavLink>
            </div>
          </div>
          {/* Zenés & Verses */}
          <div className="relative h-[45vh] lg:h-[50vh] group">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="bg-[url(/img/sup.webp)] bg-cover h-full bg-[30%]">
              <NavLink
                href="szabadban"
                className="relative z-10 text-white top-3/5 transform -translate-y-1/2 ml-5 block transition-transform duration-200 hover:scale-110 focus:scale-110"
              >
                <h2 className="text-white opacity-100 underline">Szabadban</h2>
                <h2 className="ml-5 opacity-40">Coaching</h2>
              </NavLink>
              <NavLink
                href="onthesup"
                className="relative z-10 text-white top-4/5 transform -translate-y-1/2 text-right mr-5 block transition-transform duration-200 hover:scale-110 focus:scale-110"
              >
                <h2 className="text-white opacity-100 mr-12 underline">
                  On the SUP
                </h2>
                <h2 className=" opacity-40">Coaching</h2>
              </NavLink>
            </div>
          </div>
        </div>
        {/* Nagy oszlop (2/3) */}
        <div className="lg:w-2/3 w-full flex flex-col gap-0.5">
          <div className="relative h-[35vh] lg:h-full group">
            <div className="relative bg-[url(/img/szoba2.webp)] bg-cover h-full bg-[60%]">
              <div className="absolute inset-0 bg-black opacity-40 lg:opacity-0"></div>
              <NavLink
                href="zenes"
                className="relative z-10 text-white top-3/5 transform -translate-y-1/2 ml-5 block transition-transform duration-200 hover:scale-110 focus:scale-110"
              >
                <h2 className="text-white opacity-100 underline">Zenés</h2>
                <h2 className="ml-5 opacity-40">Coaching</h2>
              </NavLink>
              <NavLink
                href="verses"
                className="relative z-10 text-white top-4/5 transform -translate-y-1/2 text-right mr-5 block transition-transform duration-200 hover:scale-110 focus:scale-110"
              >
                <h2 className="text-white opacity-100 mr-12 underline">
                  Verses
                </h2>
                <h2 className=" opacity-40">Coaching</h2>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
