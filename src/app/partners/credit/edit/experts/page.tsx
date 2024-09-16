"use client";

import InfoIcon from "@/app/students/pitch/InfoIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AddExpertModal from "./AddExpertModal";

export type ExpertsProp = {
  id?: string | number;
  name: string;
  email: string;
};

export default function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [experts, setExperts] = useState<ExpertsProp[]>([]);
  const { creditName } = {
    creditName: "Familty Health History",
  };
  const handleSubmission = ({ name, email }: ExpertsProp) => {
    setExperts([...experts, { id: experts.length + 1, name, email }]);
  };
  return (
    <>
      <div className="pt-[1.75rem] pb-[2.125rem] pl-[4.3125rem] pr-14 flex flex-col gap-[3.3125rem]">
        <div className="flex justify-between items-center">
          <h1>{creditName}</h1>
          <div>
            <Link
              href="/partners/credit/edit"
              className="btn text-[0.75rem] px-[1.6875rem] py-3"
            >
              Back
            </Link>
          </div>
        </div>
        <section className="py-[5.4375rem] px-[0.375rem] pb-8">
          <form>
            <fieldset className="flex flex-col gap-y-6">
              <div className="flex gap-x-[0.375rem]">
                <label htmlFor="experts">Add Experts</label>
                <InfoIcon message="" />
              </div>
              <input
                type="hidden"
                name="experts"
                id="experts"
                value={JSON.stringify(experts)}
              />
              {(experts.length && (
                <div className="lg:pr-[6rem]">
                  <section className="rounded-lg shadow-[0_4px_20px_0_rgba(0,0,0,0.10)] text-[1.125rem] font-semibold">
                    <div className="grid grid-cols-3  px-[5.1875rem] gap-x-2 justify-between items-center">
                      {experts.map(({ id, email, name }) => (
                        <React.Fragment key={id}>
                          <div className="py-[1.3125rem]">{name}</div>
                          <div className="py-[1.31255rem]">{email}</div>
                          <div className="flex items-center justify-end py-[1.3125rem] ">
                            <button
                              type="button"
                              onClick={() => {
                                setExperts([
                                  ...experts.filter(
                                    (expert: ExpertsProp) => expert.id !== id
                                  ),
                                ]);
                              }}
                            >
                              <Image
                                src="/close-icon.png"
                                alt="Close Icon"
                                width={30}
                                height={30}
                              />
                            </button>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </section>
                </div>
              )) ||
                ""}
              <div className="flex justify-center pt-[0.5625rem] pb-[17.3125rem]">
                <button type="button" onClick={() => setOpenModal(true)}>
                  <Image
                    src="/add-icon.png"
                    width={25}
                    height={25}
                    alt="Add icon"
                  />
                </button>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="btn py-[0.875rem] pb-[1.125rem] px-[4.616rem]"
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
      <AddExpertModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onSubmit={handleSubmission}
      />
    </>
  );
}
