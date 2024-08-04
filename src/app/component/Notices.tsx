"use client";

import { Notice } from "@/types/Notice";
import { useContext } from "react";
import { NoticeContext } from "@/provider/notices-provider";

export const Notices = () => {
  const { notices, deleteNotice } = useContext(NoticeContext);

  const handleDelete = async (_id: string) => {
    deleteNotice(_id);
  };

  return (
    <>
      {notices?.map((notice: Notice) => (
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
