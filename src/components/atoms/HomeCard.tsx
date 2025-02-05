import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function HomeCard({
  title,
  content,
}: {
  title: string;
  content?: ReactNode | string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {typeof content === "string" ? (
          <p className="text-gray-600">{content}</p>
        ) : (
          content
        )}
      </CardContent>
    </Card>
  );
}
