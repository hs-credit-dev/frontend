"use client";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

const creditDetails: CreditDetails = {
  image: "/Credit-Details.png",
  credit: "Cognitive Science",
  creditPartner: "asdas",
  stake: `Visit this <a href="#">Google Doc</a> and select three articles, two video topics, and one nonfiction text from those listed. Read your selections and take notes or annotate to present to your teacher for them to certify that you are prepared to produce youth media on this topic.`,
  pitch: "Here is what would be required for Pitch phase.",
  mint: "Here is what would be required for Mint phase.",
  status: "stake",
  stakeDetails: {
    description: `“Students: select 12 items to study from the 55 sources found <a href="#">HERE.</a> These are reputable articles about various health conditions. Teachers: offer your favorite graphic organizer for students to summarize the readings with key details and notes about why they chose each of the 12 sources.”`,
    submitted: "4/25/22",
    teacherEmail: "info@hs.credit",
  },
  pitchDetails: {
    description: `“Students: Based on your STAKE, prepare a questionnaire to interview grandparents, parents, aunts, uncles, and cousins about family health history. Teachers: use <a href="">these questions</a> to assess the students’ readiness to organize their health history event. EVENT: Students collect family health history and present their findings at a family health history celebration. They record audio interviews at the event. Students edit audio interviews into a 10-minute report. Approved credits are reviewed by public radio staff for broadcast.” `,
  },
};

export type StakeDetails = {
  description: string;
  submitted: string;
  teacherEmail: string;
};

export type PitchDetails = {
  description: string;
  submitted?: string;
};

export type MintDetails = {
  description?: string;
  submitted?: string;
};

export type CreditDetails = {
  image: string;
  credit: string;
  creditPartner: string;
  stake: string;
  pitch: string;
  mint: string;
  status?: string;
  stakeDetails?: StakeDetails;
  pitchDetails?: PitchDetails;
  mintDetails?: MintDetails;
};

export type Props = {
  creditDetails: CreditDetails;
};

function Actions({ creditDetails }: Props) {
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

function Content({ creditDetails }: Props) {
  return (
    <div className="w-full">
      <div className="flex text-center w-full">
        <div className="basis-1/3 flex justify-center">
          <div className="max-w-[18.3125rem] flex flex-col gap-y-[2.4375rem]">
            <h2 className="font-bold">Stake</h2>
            <div>
              {creditDetails?.stakeDetails && (
                <p className="details text-[0.6875rem] font-medium min-h-[9.25rem] pb-2">
                  {parse(creditDetails.stakeDetails?.description)}
                </p>
              )}
              {!creditDetails?.stakeDetails && (
                <p>{parse(creditDetails?.stake)}</p>
              )}
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center border-r-[3px] border-l-[3px] border-r-solid border-l-solid border-r-black border-l-black">
          <div className="max-w-[21.9375rem] flex flex-col gap-y-[2.4375rem]">
            <h2 className="font-bold">Pitch</h2>
            <div>
              {!creditDetails?.status && <p>{creditDetails?.pitch}</p>}
              {creditDetails?.pitchDetails?.description && (
                <p className="details text-[0.6875rem] font-medium min-h-[9.625rem] pb-2">
                  {parse(creditDetails?.pitchDetails?.description)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center">
          <div className="max-w-[14.9375rem] flex flex-col gap-y-[2.4375rem]">
            <h2 className="font-bold">Mint</h2>
            <div>{!creditDetails?.status && <p>{creditDetails?.mint}</p>}</div>
          </div>
        </div>
      </div>
      {creditDetails?.status && <Actions creditDetails={creditDetails} />}
    </div>
  );
}

function HeaderDetails({ creditDetails }: Props) {
  const statusCheck = (status: string) => {
    switch (status) {
      case "stake":
      case "pitch":
        return "Pitch - Pending";
      default:
        return "";
    }
  };
  return (
    <div
      className={`text-center pb-20  flex items-center ${
        !creditDetails?.status
          ? "text-black flex-col text-[1.125rem]"
          : "text-[#949494] text-[0.875rem] gap-x-2"
      }`}
    >
      <h3 className="font-normal flex gap-x-1">
        <strong className="font-semibold">Credit:</strong>
        <span>{creditDetails?.credit}</span>
      </h3>
      {!creditDetails?.status ? (
        <h3 className="font-normal flex gap-x-1">
          <strong className="font-semibold">Credit Partner:</strong>
          <span className="font-medium italic">
            {creditDetails?.creditPartner}
          </span>
        </h3>
      ) : (
        <>
          <div className="text-[0.625rem]">•</div>
          <h3 className="font-normal flex gap-x-1">
            <strong className="font-semibold">Status:</strong>
            <span className="font-medium">
              {statusCheck(creditDetails.status)}
            </span>
          </h3>
          <div className="text-[0.625rem]">•</div>
          <h3 className="font-normal flex gap-x-1">
            <strong className="font-semibold">Teacher&apos;s Email:</strong>
            <span className="font-medium">
              {creditDetails?.stakeDetails?.teacherEmail}
            </span>
          </h3>
        </>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <div className="pt-[1.6875rem] pb-[3.75rem] pl-[4.3125rem] pr-14">
      <div className="flex justify-between items-center">
        <h1>Credit Detail</h1>{" "}
        <div>
          <Link
            href="/students"
            className="btn text-[0.75rem] px-[1.6875rem] py-3"
          >
            Back
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center pt-[2.375rem] gap-y-[1.5625rem]">
        <div>
          <Image
            src={creditDetails?.image}
            alt={creditDetails?.credit}
            width={200}
            height={200}
          />
        </div>
        <HeaderDetails creditDetails={creditDetails} />
        <Content creditDetails={creditDetails} />
        {!creditDetails?.status && (
          <div className="flex pt-6">
            <Link
              href="/students"
              className="text-[0.875rem] btn pt-[1.125rem] pb-[1.0625rem] px-[3.875rem]"
            >
              Start Credit
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
