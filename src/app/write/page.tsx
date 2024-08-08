"use client";

import { NoticeContext } from "@/provider/notices-provider";
import Link from "next/link";
import { FormEvent, useContext } from "react";
import { useRouter } from "next/router";

export default function Write() {
  const { addNotice } = useContext(NoticeContext);
  // const { push } = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const tilteElement = formElement.namedItem("title") as HTMLInputElement;
    const bodyElement = formElement.namedItem("body") as HTMLTextAreaElement;

    const title = tilteElement?.value;
    const body = bodyElement?.value;

    fetch("/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
      cache: "no-cache",
      //캐시 여기
    });

    await addNotice({ title, body });
    // push("/");
  };

  return (
    <div>
      <h1>write</h1>
      <form action="" onSubmit={onSubmit}>
        <span>title</span>
        <input type="text" name="title" id="title" />
        <span>body</span>
        <textarea name="body" id="body" cols={30} rows={10}></textarea>
        <button type="submit">제출</button>
      </form>
      <Link href="/">채co</Link>
    </div>
  );
}
