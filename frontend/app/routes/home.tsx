import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Hey there!
      </h1>
      <p className="text-lg text-gray-600">
        I&apos;m Ellie
      </p>
    </div>
  );
}
