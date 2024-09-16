import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-[4.625rem]">
      <div className="main">{children}</div>
    </div>
  );
}
