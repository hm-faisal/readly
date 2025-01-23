"use client"; // Mark this as a Client Component

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import CardBtn from "@/components/custom/CardBtn";

export function CardLink({ title, description, href }) {
  return (
    <Card>
      <CardHeader>
        <Link href={href}>
          <CardTitle>{title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <CardBtn label={"See Details"} href={href} />
      </CardContent>
    </Card>
  );
}
