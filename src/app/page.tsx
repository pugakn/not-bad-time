"use client";

import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  router.replace("/auth");
  return null;
}
