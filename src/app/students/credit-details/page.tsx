"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import getCredtiDetails from "../../api/getCreditDetails";
import parse from "html-react-parser";

const creditDetails = {
  image: "/Credit-Details.png",
  credit: "Cognitive Science",
  creditPartner: "asdas",
  stake: `Visit this <a href="#">Google Doc</a> and select three articles, two video topics, and one nonfiction text from those listed. Read your selections and take notes or annotate to present to your teacher for them to certify that you are prepared to produce youth media on this topic.`,
  pitch: "Here is what would be required for Pitch phase.",
  mint: "Here is what would be required for Mint phase.",
  stakeDetails: {
    description: `“Students: select 12 items to study from the 55 sources found <a href="#">HERE.</a> These are reputable articles about various health conditions. Teachers: offer your favorite graphic organizer for students to summarize the readings with key details and notes about why they chose each of the 12 sources.”`,
    submitted: "4/25/22",
  },
};

type StakeDetails = {
  description: string;
  submitted: string;
};

type PitchDetails = {
  description: string;
  status: string;
};

type CreditDetails = {
  image: string;
  credit: string;
  creditPartner: string;
  stake: string;
  pitch: string;
  mint: string;
  stakeDetails?: StakeDetails;
  pitchDetails?: PitchDetails;
};
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
        <div className="text-center pb-20">
          <h3 className="text-black font-normal">
            <strong className="font-semibold pr-1">Credit:</strong>
            <span>{creditDetails?.credit}</span>
          </h3>
          <h3 className="text-black font-normal">
            <strong className="font-semibold pr-1">Credit Partner:</strong>
            <span className="font-medium italic">
              {creditDetails?.creditPartner}
            </span>
          </h3>
        </div>
        <div className="flex text-center w-full pb-6">
          <div className="basis-1/3 flex justify-center">
            <div className="max-w-[15.25rem] flex flex-col gap-y-[2.4375rem]">
              <h2 className="font-bold">Stake</h2>
              {creditDetails?.stakeDetails && (
                <p className="staked text-[0.6875rem] font-medium">
                  {parse(creditDetails.stakeDetails?.description)}
                </p>
              )}
              {!creditDetails?.stakeDetails && (
                <p>{parse(creditDetails?.stake)}</p>
              )}
            </div>
          </div>
          <div className="basis-1/3 flex justify-center border-r-[3px] border-l-[3px] border-r-solid border-l-solid border-r-black border-l-black">
            <div className="max-w-[14.9375rem] flex flex-col gap-y-[2.4375rem]">
              <h2 className="font-bold">Pitch</h2>
              <p>{creditDetails?.pitch}</p>
            </div>
          </div>
          <div className="basis-1/3 flex justify-center">
            <div className="max-w-[14.9375rem] flex flex-col gap-y-[2.4375rem]">
              <h2 className="font-bold">Mint</h2>
              <p>{creditDetails?.mint}</p>
            </div>
          </div>
        </div>
        {!creditDetails?.stakeDetails && (
          <div className="flex">
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
