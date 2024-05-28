import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex justify-end px-[6.0625rem] pb-[3.75rem]">
        <Link className="flex gap-x-5" href="#">
          <div className="text-[1.25rem] font-semibold">View Rubric </div>
          <div>
            <Image src="/Grid.png" width={24} height={24} alt="View Rubric" />
          </div>
        </Link>
      </div>
    </div>
  );
}
