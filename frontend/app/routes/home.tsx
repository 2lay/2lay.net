import type { Route } from "./+types/home";
import Card from "~/_components/card";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Card>
        <p className="text-2xl font-medium">
          hey there!, i'm <span className="font-bold">ellie</span>
        </p>
        <p>this is my silly little website, blog and portfolio</p>
      </Card>
    </div>
  );
}
