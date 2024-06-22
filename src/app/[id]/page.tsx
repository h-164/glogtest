import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const profileTitle = await fetch(`http://localhost:3000/api?name=${id}`).then(
    (res) => res.json()
  );

  return {
    title: profileTitle,
    description: profileTitle + "을 확인할 수 있는 페이지 입니다.",
  };
}

export default function Page() {
  return <div></div>;
}
