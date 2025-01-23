import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ClientBtn from "./ClientBtn";

const PostCard = ({ card }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{card.body}</CardDescription>
        <ClientBtn label="See Details" id={card.id} />
      </CardContent>
    </Card>
  );
};

export default PostCard;
