"use client";

import { Notice } from "@/types/Notice";
import { useContext } from "react";
import { NoticeContext } from "@/provider/notices-provider";
// import Image from "next/image";

export const Notices = () => {
  const { notices, deleteNotice, voteNotice } = useContext(NoticeContext);

  notices.sort((a, b) => b.count - a.count);

  const handleDelete = async (_id: string) => {
    deleteNotice(_id);
  };

  const handleVote = async (_id: string, count: number) => {
    const voteCount = count + 1;
    voteNotice(_id, voteCount);
  };

  return (
    <>
      {notices?.map((notice: Notice) => (
        <>
          {/* <Image
            src={notice.profileImg}
            alt={"3bong"}
            width={100}
            height={100}
          ></Image> */}
          <h1>
            {notices.indexOf(notice) + 1}등 {notice.title}
          </h1>
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
