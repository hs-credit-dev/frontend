import { useRef, useEffect, useState } from "react";
import { Avatar, Typography } from "@material-tailwind/react";

import shareIcon from "../../../assets/svg/share-icon.svg";
import downloadIcon from "../../../assets/svg/download-icon.svg";
import Transcript from "./Transcript";
import { userInSession } from "./../../../App";
import { useAtom } from "jotai";
import { useReactToPrint } from "react-to-print";
import { students } from "../../../api_fake";

const DashboardFooter = () => {
  const [user] = useAtom(userInSession);
  const [student, setStudent] = useState(null);

  const transcriptRef = useRef();
  const printTranscript = useReactToPrint({
    content: () => transcriptRef.current,
    documentTitle: "transcript.pdf",
  });

  useEffect(() => {
    (async () => {
      if (!user) return;
      const { studentId } = user;
      const res = await students.get(studentId);
      const { student } = res.data.data;
      setStudent(student);
    })();
  }, [user]);

  return (
    <>
      <div className="flex justify-end w-full p-8 mt-auto">
        <span to="" className="flex mr-4 items-center bg-transparent cursor-pointer">
          <Typography className="text-black font-bold bg-transparent">
            Share
          </Typography>
          <Avatar src={shareIcon} alt="share" className="mr-4 w-6 h-6" />
        </span>
        <button
          className="flex mr-4 items-center bg-transparent"
          onClick={() => {
            if (!student) return;

            transcriptRef.current.classList.remove("hidden");
            printTranscript();
            transcriptRef.current.classList.add("hidden");
          }}
        >
          <Typography className="text-black font-bold bg-transparent">
            Download
          </Typography>
          <Avatar src={downloadIcon} alt="download" className="mr-4 w-6 h-6" />
        </button>
      </div>
      <Transcript
        ref={transcriptRef}
        user={user}
        student={student}
        className="hidden"
      />
    </>
  );
};

export default DashboardFooter;
