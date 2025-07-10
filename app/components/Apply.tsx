import Container from "./base/Container";
import TextLink from "./base/Link";
import SemiBold from "./base/SemiBold";
import Tag from "./base/Tag";

export default function Apply() {
  return (
    <Container className="container mx-auto px-4 py-8 flex flex-col gap-8">
      <p>
        Az 5 alkalmas coaching folyamat egy{" "}
        <SemiBold>ingyenes előzetes konzultációval</SemiBold> kezdődik, amelynek
        célja annak közös felmérése, hogy kialakítható-e a hatékony
        együttműködés. Ebben a szakaszban mindkét fél számára adott a lehetőség,
        hogy indoklás nélkül elálljon a folytatástól.
      </p>
      <Tag>Jelentkezés:</Tag>
      <p className="text-center">
        Jelentkezz most a következő email címen:{" "}
        <TextLink href="mailto:discreten@gmail.com">
          discreten@gmail.com
        </TextLink>
      </p>
    </Container>
  );
}
