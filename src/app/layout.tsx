import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NoticesProvider from "@/provider/notices-provider";
import { clientApi } from "@/lib/client-api/notices";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "내가 키우는 돼지",
  description: "내가 키우는 돼지 이름은 신채돌",
  verification: {
    google: "KnUZi59wuoZQC8eGRGPRGWFD3gsLCbXjLr2kEpzlV4c",
    other: {
      "naver-site-verification": "de080567b31e95b10d99848b0a8e8370074dd733",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await clientApi.getNotices();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NoticesProvider initialNotices={data.notices}>
          {children}
        </NoticesProvider>
      </body>
    </html>
  );
}
