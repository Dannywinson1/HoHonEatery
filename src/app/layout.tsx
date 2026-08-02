import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "好漢 HoHon Eatery｜西營盤舒適美食",
  description: "西營盤好漢 HoHon Eatery：用心製作漢堡、意粉與暖心小食。",
  keywords: ["HoHon Eatery", "好漢", "西營盤餐廳", "Sai Ying Pun", "Hong Kong burgers"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
