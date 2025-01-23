import { CardLink } from "@/components/custom/CardLink";

export default function Card({ card }) {
  return (
    <CardLink
      title={card.title}
      description={card.body}
      href={`/blog/${card.id}`}
    />
  );
}
