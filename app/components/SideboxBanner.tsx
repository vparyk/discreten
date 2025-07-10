import Image from "next/image";

type BannerProps = {
  children: React.ReactNode;
  imageUrl: string;
  title: string;
  subtitle: string;
  alt: string;
  titlePosition?: "first-third" | "center";
  caption?: React.ReactNode; // Opcionális képaláírás
  isHeading?: boolean;
};

export default function SideboxBanner({
  children,
  imageUrl,
  title,
  subtitle,
  alt,
  titlePosition = "center",
  caption,
  isHeading = true,
}: BannerProps) {
  const Heading = isHeading ? "h1" : "div";

  return (
    <div>
      <div className="flex flex-col 2xl:flex-row w-full">
        {/* Kép arányos megjelenítése */}
        <div className="w-full lg:h-[85vh] aspect-[4/3] 3xl:aspect-[4/3] relative 2xl:h-screen xl:h-[85vh]">
          <Image
            fill
            src={imageUrl}
            alt={alt}
            className="object-cover object-bottom w-full h-full"
          />
          {/* Szöveg a képen – csak desktopon látható */}
          <div
            className={`hidden 2xl:flex absolute inset-0 bg-black/30 items-center px-16`}
          >
            <div
              className={`text-white max-w-xl flex flex-col h-full ${
                titlePosition === "center"
                  ? "justify-center"
                  : "justify-start pt-[22%]"
              }`}
            >
              <Heading className="text-4xl font-bold drop-shadow-lg">
                {title}
              </Heading>
              <p className="mt-4 text-lg drop-shadow">{subtitle}</p>
            </div>
          </div>
          {/* Képaláírás – opcionálisan megjelenik a kép alatt mobilon */}
          {caption && (
            <div className="2xl:hidden block bg-gray-100 text-gray-700 text-center py-4">
              {caption}
            </div>
          )}
        </div>

        {/* Mobil szöveges blokk a kép alatt */}
        <div className="2xl:hidden bg-white py-6 pb-8 px-4 text-center">
          <Heading className="text-xl font-bold text-gray-900">{title}</Heading>
          <p className="mt-3 text-gray-700">{subtitle}</p>
        </div>

        {/* Szövegdoboz – jobbra desktopon, alul mobilon */}
        <div className="w-full bg-rosemary p-10 flex items-center text-white justify-center 2xl:justify-start 2xl:border-l-2 2xl:w-2xl 3xl:w-full">
          <div className="space-y-4 text-base leading-relaxed max-w-lg flex flex-col gap-6 m-4">
            {children}
          </div>
        </div>
        {/* Képaláírás – opcionálisan megjelenik a kép alatt */}
      </div>
      {caption && (
        <div className="hidden 2xl:block bg-gray-100 text-gray-700 pl-9 py-4">
          {caption}
        </div>
      )}{" "}
    </div>
  );
}
