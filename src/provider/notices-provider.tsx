"use client";

import { clientApi } from "@/lib/client-api/notices";
import { Notice } from "@/types/Notice";
import { PropsWithChildren, createContext, useState } from "react";

interface NoticesContextValue {
  notices: Notice[];
  addNotice: (pros: { title: string; body: string }) => Promise<void>;
  deleteNotice: (_id: string) => Promise<void>;
}

const defaultNoticesContextValue: NoticesContextValue = {
  notices: [],
  addNotice: (pros: { title: string; body: string }) => Promise.resolve(),
  deleteNotice: (_id: string) => Promise.resolve(),
};

export const NoticeContext = createContext<NoticesContextValue>(
  defaultNoticesContextValue
);

interface Props extends PropsWithChildren {
  initialNotices: Notice[];
}

export default function NoticesProvider({ children, initialNotices }: Props) {
  const [notices, setNotices] = useState(initialNotices);

  const addNotice = async ({
    title,
    body,
  }: {
    title: string;
    body: string;
  }) => {
    try {
      const { response, data } = await clientApi.postNotice({ title, body });

      if (response.status !== 200) {
        throw new Error("error");
      }

      setNotices((prev) => [...prev, data.notice]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNotice = async (_id: string) => {
    try {
      const { response } = await clientApi.deleteNotice(_id);

      if (response.status !== 200) {
        throw new Error("erroroooooo");
      }

      setNotices((prev) => prev.filter((notice) => notice._id !== _id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NoticeContext.Provider value={{ notices, addNotice, deleteNotice }}>
      {children}
    </NoticeContext.Provider>
  );
}
