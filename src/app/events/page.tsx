import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Link href={"/events"}></Link>
      <h1>events</h1>
    </div>
  );
}
