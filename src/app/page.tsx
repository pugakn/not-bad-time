import { redirect } from "next/navigation";

export default function Main() {
  redirect("/auth");
  return null;
}
