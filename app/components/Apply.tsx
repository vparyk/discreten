import ApplyForm from "./ApplyForm";
import Container from "./base/Container";
import TextLink from "./base/Link";
import SemiBold from "./base/SemiBold";
import Tag from "./base/Tag";

type ApplyProps = {
  initialSelected?: string;
};

export default function Apply({ initialSelected }: ApplyProps) {
  return (
    <div>
      <div className="bg-deep">
        <Container className="container mx-auto px-4 py-6 lg:py-8 flex flex-col gap-8 mb-2 text-white">
          <Tag>Jelentkezés:</Tag>
          <p className="text-center   ">
            Az 5 alkalmas coaching folyamat egy{" "}
            <SemiBold>ingyenes előzetes konzultációval</SemiBold> kezdődik,
            amelynek célja annak közös felmérése, hogy kialakítható-e a hatékony
            együttműködés. Ebben a szakaszban mindkét fél számára adott a
            lehetőség, hogy indoklás nélkül elálljon a folytatástól.
          </p>
          <p className="text-center">
            Jelentkezz most a lenti felületen, vagy a következő email címen:{" "}
            <TextLink
              href="mailto:discreten@gmail.com"
              className="text-white underline"
            >
              discretencoaching@gmail.com
            </TextLink>
          </p>
        </Container>
      </div>
      <ApplyForm initialSelected={initialSelected} />
    </div>
  );
}
