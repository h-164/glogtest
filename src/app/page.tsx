import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/notices`
  );
  const data = await response.json();
  console.log(data);

  return (
    <main>
      <h1>신채돌</h1>
      <h1>채ehf</h1>
      <Link href="/write">채co</Link>
      {/* {data.data.notices.map((notice: any) => {
        <>
          <h1>{notice.title}</h1>;<p>{notice.body}</p>
        </>;
      })} */}
    </main>
  );
}
