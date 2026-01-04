"use client";

import { serverfunction } from "@/utils/utlis";

export default function page() {
    const result = serverfunction();
  return (
    <div>
      <h1>Client component {result}</h1>
    </div>
  )
}
