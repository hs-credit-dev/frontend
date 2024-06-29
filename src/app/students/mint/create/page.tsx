"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import InfoIcon from "../../pitch/InfoIcon";
import JoditEditor from "jodit-react";
import { CloseIcon } from "@/app/components/icons";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);

  const editor = useRef(null);
  const [abstract, setAbstract] = useState("");
  const config = useMemo(
    () => ({
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      editorClassName: "textarea min-h-[170px]",
      disablePlugins: "add-new-line",
      minHeight: "13.4375rem",
      minWidth: "none",
      buttons:
        "bold,italic,underline,strikethrough,ul,ol,paragraph,superscript,subscript,cut,copy,paste,selectall,copyformat,link,undo,redo,find,source",
    }),
    []
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };
  const handleClose = () => {
    setFile(null);
  };
  return (
    <div className="pt-[1.75rem] pb-[2.125rem] pl-[4.3125rem] pr-14">
      <div className="flex justify-between items-center">
        <h1>Mint</h1>{" "}
        <div>
          <Link
            href="/students/credit-details"
            className="btn text-[0.75rem] px-[1.6875rem] py-3"
          >
            Back
          </Link>
        </div>
      </div>
      <div>
        <section className="font-medium pt-[2.4375rem] pb-[3.5625rem]">
          <p>
            You did it! Upload your final work product (10-minutes of audio or
            video) here. Your teacher will receive an email to verify that they
            approve the work for submission. It will then be routed to our
            credit expert team for final evaluation which takes place at the end
            of each calendar month with results available by the 15th of the
            following month. You will receive email confirmation during each
            step of the process.
          </p>
        </section>
        <section className="px-[0.3125rem]">
          <form>
            <fieldset className="flex flex-col gap-y-[2.5625rem]">
              <div className="flex gap-x-6">
                <div className="flex flex-col gap-y-[0.625rem] max-w-[30.9375rem] w-full">
                  <div className="flex gap-x-[0.4375rem]">
                    <label htmlFor="title">Title</label>
                    <InfoIcon message="Choose a short title for your project." />
                  </div>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-[1.5625rem]">
                <div className="flex flex-col gap-y-[0.625rem]">
                  <div className="flex gap-x-[0.4375rem]">
                    <label htmlFor="stakeContent">Abstract</label>
                    <InfoIcon message="Abstract description." />
                  </div>
                  <JoditEditor
                    ref={editor}
                    className="abstract"
                    value={abstract}
                    onBlur={(newContent) => setAbstract(newContent)}
                    config={config}
                  />
                </div>
                <div className="flex flex-col gap-y-[0.4375rem]">
                  <div className="flex gap-x-[0.5625rem]">
                    {!file && (
                      <label className="btn cursor-pointer">
                        <span className="block py-4 px-[1.4864rem]">
                          Click here to upload
                        </span>
                        <input
                          className="hidden"
                          type="file"
                          accept="application/pdf"
                          required
                          onChange={handleFileUpload}
                        />
                      </label>
                    )}

                    {file && (
                      <div className="flex flex-col justify-center">
                        <span className="flex gap-x-2 rounded-[0.4375rem] border-solid border-black border-[1px] text-[0.75rem] italic px-[0.375rem] items-center">
                          {file.name}
                          <CloseIcon onClick={handleClose} />
                        </span>
                      </div>
                    )}
                    <button type="submit" className="btn py-4 px-[4.625rem]">
                      Submit
                    </button>
                  </div>
                  <span className="text-[0.625rem] italic font-medium pb-2">
                    Please make sure your attachment doesn’t exceed 25 MB.
                  </span>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
}
