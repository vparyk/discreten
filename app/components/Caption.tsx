type CaptionProps = {
  text: string;
};

export default function Caption({ text }: CaptionProps) {
  return <p className="text-sm text-gray-600 italic">{text}</p>;
}
