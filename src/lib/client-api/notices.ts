import { NoticeResponse, NoticesResponse } from "@/types/Notice";

const NOTICES_END_POINT = `${process.env.NEXT_PUBLIC_BASE_URL}/api/notices`;

const getNotices = async (): Promise<NoticesResponse> => {
  const res = await fetch(NOTICES_END_POINT);
  //,{ cache: "no-cache" }
  //여기 캐시
  const { data } = await res.json();

  return data;
};

const getNotice = async (_id: string): Promise<NoticeResponse> => {
  const res = await fetch(`${NOTICES_END_POINT}/${_id}`);
  //,{ cache: "no-cache"} 
  //여기 캐시
  const { data } = await res.json();

  return data;
};

const postNotice = async ({
  title,
  body,
}: {
  title: string;
  body: string;
}): Promise<{
  response: Response;
  data: NoticeResponse;
}> => {
  const response = await fetch(NOTICES_END_POINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body }),
    // cache: "no-cache", 
    //여기 캐시
  });

  const { data } = await response.json();

  return { response, data };
};

const deleteNotice = async (_id: string): Promise<{ response: Response }> => {
  const response = await fetch(`${NOTICES_END_POINT}?_id=${_id}`, {
    method: "DELETE",
    // cache: "no-cache", 
    //여기 캐시
  });

  return { response };
};

const voteNotice = async ({
  _id,
  count
}: {
  _id: string;
  count:number;
}) => {
  const response = await fetch(`${NOTICES_END_POINT}?_id=${_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ count }),
    // cache: "no-cache", 
    //여기 캐시

  });
  const { data } = await response.json();

  return { response, data };
};

export const clientApi = {
  getNotices,
  getNotice,
  postNotice,
  deleteNotice,
  voteNotice,
} as const;