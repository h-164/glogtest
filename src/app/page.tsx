import Link from "next/link";
import { Notices } from "./component/Notices";
import { Notice } from "@/models/notice.schema";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notices`,
    { cache: "no-cache" }
  );
  const data = await response.json();

  return (
    <main>
      <h1>신채돌</h1>
      <h1>채ehf</h1>
      <Link href="/write">채co</Link>
      <Notices data={data.data.notices} />
    </main>
  );
}
