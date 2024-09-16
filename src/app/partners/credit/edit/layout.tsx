import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-[4.625rem]">
      <div className="main">{children}</div>
      <div className="text-[1.25rem] font-semibold flex justify-end mx-[3.125rem]">
        <Link href="#" className="flex gap-x-6">
          View Credit Guide
          <Image
            src="/sheet-guide.png"
            alt="Sheet Guide icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
}
