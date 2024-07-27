"use client";

import { CloseIcon } from "@/app/components/icons";
import Select from "@/app/components/Select";
import InfoIcon from "@/app/students/pitch/InfoIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
export default function Page() {
  const discipline = useRef<HTMLSelectElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [creditCode, setCreditCode] = useState("");
  const disciplines: { id: number; label: string; value: string }[] = [
    {
      id: 0,
      label: " ",
      value: "",
    },
    {
      id: 1,
      label: "Arts",
      value: "AR",
    },
    {
      id: 2,
      label: "English",
      value: "ELA",
    },
    {
      id: 3,
      label: "Foreign Language",
      value: "FL",
    },
    {
      id: 4,
      label: "Health",
      value: "HE",
    },
    {
      id: 5,
      label: "Humanities",
      value: "HU",
    },
    {
      id: 6,
      label: "Journalism",
      value: "JN",
    },
    {
      id: 7,
      label: "Mathematics",
      value: "MA",
    },
    {
      id: 8,
      label: "Science",
      value: "SC",
    },
    {
      id: 9,
      label: "Social Studies",
      value: "SS",
    },
    {
      id: 10,
      label: "Technology",
      value: "TE",
    },
  ];

  const admins: {
    id: string | number;
    name: string;
    email: string;
  }[] = [
    {
      id: 1,
      name: "Elizabeth Simmons",
      email: "elizabeth@hs.credit",
    },
  ];

  const instuitionCode = "BMCC";
  const courseNumber = "0001";
  const updateCreditCode = (value: string) => {
    setCourseCode(value ?? "");
  };

  useEffect(() => {
    if (courseCode) {
      setCreditCode(`${instuitionCode}${courseCode}${courseNumber}`);
    } else {
      setCreditCode("");
    }
  }, [courseCode]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleClose = () => {
    setFile(null);
  };

  return (
    <div className="pt-[1.75rem] pb-[2.125rem] pl-[4.3125rem] pr-14">
      <div className="flex justify-between items-center">
        <h1>Manage Credit</h1>
        <div>
          <Link
            href="/students/credit-details"
            className="btn text-[0.75rem] px-[1.6875rem] py-3"
          >
            Back
          </Link>
        </div>
      </div>
      <section className="py-8 px-[0.375rem]">
        <form>
          <fieldset className="flex flex-col gap-y-[2.1875rem]">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-10">
                <div className="flex flex-col gap-y-2">
                  <div className="flex gap-x-[0.3125rem]">
                    <label htmlFor="discipline">Discipline</label>
                    <InfoIcon message="Tooltip message for Discipline" />
                  </div>
                  <Select
                    options={disciplines}
                    onChange={updateCreditCode}
                    placeHolder=""
                  />
                </div>
                <div className="flex flex-col gap-y-[0.625rem]">
                  <div className="flex gap-x-[0.3125rem]">
                    <label htmlFor="credit_code">Credit Code</label>
                  </div>
                  <input
                    type="text"
                    name="credit_code"
                    id="credit_code"
                    className="bg-[#E0E0E0] py-[1.1875rem] px-[1.3125rem]"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex max-w-[18.6875rem] w-full">
                <button
                  type="button"
                  disabled
                  className="btn py-4 px-[4.527rem]"
                >
                  Publish
                </button>
              </div>
            </div>
            <div className="flex gap-x-[2.125rem]">
              <div className="flex flex-col gap-y-[0.625rem] max-w-[22.1875rem] w-full">
                <div className="flex gap-x-[0.3125rem]">
                  <label htmlFor="credit_name">Credit Name</label>
                  <InfoIcon message="Tooltip message for Credit Name" />
                </div>
                <input
                  type="text"
                  name="credti_name"
                  id="credit_name"
                  maxLength={50}
                />
              </div>

              <div className="flex flex-col gap-y-[0.625rem]">
                <div className="flex gap-x-[0.3125rem]">
                  <label htmlFor="credit_image">Credit Image</label>
                </div>
                {!file && (
                  <div className="flex flex-col gap-y-[0.375rem]">
                    <span className="relative">
                      <button className="btn py-4 px-[1.4865rem]">
                        Click here to upload
                      </button>
                      <input
                        className="opacity-0 absolute inset-0 "
                        name="credit_image"
                        id="credit_image"
                        type="file"
                        accept="image/*"
                        required
                        onChange={handleFileUpload}
                      />
                    </span>
                    <span className="text-[0.625rem] font-medium italic">
                      For best results, use 200 x 220 px image
                    </span>
                  </div>
                )}

                {file && (
                  <div className="flex gap-x-[1.625rem] items-center">
                    <Image
                      src={image}
                      alt="Course Image"
                      height={62}
                      width={62}
                    />
                    <button onClick={handleClose}>
                      <CloseIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex gap-x-[0.3125rem]">
                <label htmlFor="admins">Add Admins</label>
                <InfoIcon message="Tooltip Message for Add Admins" />
              </div>
              <input
                type="hidden"
                name="admins"
                id="admins"
                value={JSON.stringify(admins)}
              />
              {admins.length > 0 && (
                <section className="rounded-lg shadow-[0_4px_20px_0_rgba(0,0,0,0.10)] text-[1.125rem] font-semibold">
                  <div className="grid grid-cols-3  px-[5.1875rem] gap-x-2 justify-between items-center">
                    {admins.map(({ id, email, name }) => (
                      <React.Fragment key={id}>
                        <div className="py-[1.46875rem] ">{name}</div>
                        <div className="py-[1.46875rem] ">{email}</div>
                        <div className="flex items-center justify-end py-[1.46875rem] ">
                          <button>
                            <Image
                              src="/close-icon.png"
                              alt="Close Icon"
                              width={25}
                              height={25}
                            />
                          </button>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </section>
              )}
              <div className="flex justify-center pt-[0.5625rem]">
                <button>
                  <Image
                    src="/add-icon.png"
                    width={25}
                    height={25}
                    alt="Add icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex pt-[4.6875rem]">
              <button
                type="submit"
                disabled
                className="btn  py-4 px-[4.602rem]"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
