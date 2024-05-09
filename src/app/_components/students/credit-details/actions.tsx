import { CreditDetails } from "@/app/students/credit-details/page";
import Link from "next/link";

export type actionTypes = {
  creditDetails: CreditDetails;
};
export default function Actions({ creditDetails }: actionTypes) {
  return (
    <div className="flex text-center w-full">
      <div className="basis-1/3 flex justify-center">
        <div className="max-w-[18.3125rem] flex flex-col gap-y-[2.4375rem]">
          <div>
            {creditDetails?.status && (
              <div className="flex flex-col items-center gap-y-[0.375rem] text-[0.875rem] font-medium">
                <Link
                  href=""
                  className="rounded-[1.25rem] border-2 border-solid border-[#805DBE] min-w-[6.25rem] py-1 text-black"
                >
                  View
                </Link>
                <Link
                  href=""
                  className="rounded-[1.25rem] border-2 border-solid border-[#805DBE] min-w-[6.25rem] py-1 text-black"
                >
                  Edit
                </Link>
                {creditDetails?.stakeDetails?.submitted && (
                  <span className="text-[#949494] text-[0.625rem] italic pt-[0.4375rem]">
                    {`Submitted ${creditDetails.stakeDetails?.submitted}`}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="basis-1/3 flex justify-center border-r-[3px] border-l-[3px] border-r-solid border-l-solid border-r-black border-l-black">
        <div className="max-w-[21.9375rem] flex flex-col gap-y-[2.4375rem]">
          <div>
            {creditDetails?.status === "stake" && (
              <div className="flex flex-col items-center text-[0.875rem] font-medium">
                <Link
                  href=""
                  className="rounded-[1.25rem] border-2 border-solid border-[#805DBE] min-w-[6.25rem] py-1 text-black"
                >
                  Start
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="basis-1/3 flex justify-center">
        <div className="max-w-[14.9375rem] flex flex-col gap-y-[2.4375rem]">
          <div>
            {creditDetails?.status === "stake" && (
              <div className="flex flex-col items-center text-[0.875rem] font-medium">
                <Link
                  href=""
                  className="rounded-[1.25rem] border-2 border-solid border-[#8A8A8A] min-w-[6.25rem] py-1 text-[#A7A7A7A] pointer-events-none cursor-default"
                >
                  Start
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
