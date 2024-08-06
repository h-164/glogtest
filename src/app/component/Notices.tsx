"use client";

import { Notice } from "@/types/Notice";
import { useContext } from "react";
import { NoticeContext } from "@/provider/notices-provider";

export const Notices = () => {
  const { notices, deleteNotice, voteNotice } = useContext(NoticeContext);

  const handleDelete = async (_id: string) => {
    deleteNotice(_id);
  };

  const handleVote = async (_id: string, count: number) => {
    console.log(_id, count);
    const voteCount = count + 1;
    voteNotice(_id, voteCount);
  };

  return (
    <>
      {notices?.map((notice: Notice) => (
        <>
          <h1>{notice.title}</h1>
          <p>{notice.body}</p>
          <p>{notice.date}</p>
          <p>{notice.count}</p>
          <button onClick={() => handleDelete(notice._id)}>delete</button>
          <button onClick={() => handleVote(notice._id, notice.count)}>
            투표하기
          </button>
        </>
      ))}
    </>
  );
};
