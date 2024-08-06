import Link from "next/link";
import { Notices } from "./component/Notices";

export default async function Home() {
  return (
    <main>
      <h1>신채돌</h1>
      <h1>채ehf</h1>
      <Link href="/write">글쓰기</Link>
      <Link href="/vote">투표</Link>
      <Notices />
    </main>
  );
}
