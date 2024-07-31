"use client";

import { Notice } from "@/types/Notice";

export const Notices = ({ data }: { data: Notice[] }) => {
  const handleDelete = async (_id: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/notices?_id=${_id}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      {data.map((notice: any) => (
        <>
          <h1>{notice.title}</h1>
          <p>{notice.body}</p>
          <p>{notice.date}</p>
          <button onClick={() => handleDelete(notice._id)}>delete</button>
        </>
      ))}
    </>
  );
};
