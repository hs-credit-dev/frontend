"use client";

import { useState } from "react";
import Link from "next/link";
import InfoIcon from "./InfoIcon";

const PitchUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  // Recreating a fake submission to servers for UI purposes
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        alert("file has been uploaded!");
        setFile(null);
      }, 6000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row mt-10">
        <label>Task</label>
        <InfoIcon message="No sentence provided." />
      </div>

      <div className="mt-7">
        <label className="py-4 px-6 rounded-full bg-[#805DBE] text-white text-xs font-bold hover:bg-violet-700 cursor-pointer">
          Click here to upload
          <input
            className="hidden"
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            required
          />
        </label>
        {file && (
          <span className="text-gray-400 text-xs ml-3">
            You have chosen to upload {file?.name}
          </span>
        )}
        <p className="mt-7 text-xs">
          Please make sure your attachment does not exceed 25 MB.
        </p>
      </div>

      <div className="flex flex-row mt-10 mb-6">
        <label>
          Checkpoints <span className="text-sm">(Optional)</span>
        </label>
        <InfoIcon message="Add/Edit key milestones to keep you and your teacher on the same page." />
      </div>
      <Link
        href="/students/checkpoints"
        className="py-2 px-6 rounded-full border-[#805DBE] border-2 text-black text-xs font-bold hover:bg-[#805DBE] hover:text-white"
      >
        Add/Edit
      </Link>

      <div className="mt-14">
        <button
          className="py-4 px-16 rounded-full bg-[#805DBE] text-white text-xs font-bold enabled:hover:bg-violet-700 cursor-pointer disabled:opacity-75"
          type="submit"
          disabled={isLoading || !file}
        >
          {isLoading ? "Uploading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default PitchUploadForm;
