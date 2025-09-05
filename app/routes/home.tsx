import type { Route } from "./+types/home";
import { HomeComponent } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kanban Board" },
    { name: "description", content: "Welcome to Kanban Board" },
  ];
}

export default function Home() {
  return <HomeComponent />;
}
