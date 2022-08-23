import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Typography } from "@material-tailwind/react";

import shareIcon from "../../../assets/svg/share-icon.svg";
import downloadIcon from "../../../assets/svg/download-icon.svg";
import Transcript from "./Transcript";
import { userInSession } from "./../../../App";
import { useAtom } from "jotai";
import { useReactToPrint } from "react-to-print";
import { students } from "../../../api";

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
      const { studentId } = user;
      const res = await students.get(studentId);
      const { student } = res.data.data;
      setStudent(student);
    })();
  });

  return (
    <>
      <div className="flex mt-8 mx-8 absolute right-0 bottom-8 bg-transparent">
        <NavLink to="/" className="flex mr-4 items-center bg-transparent">
          <Typography className="text-black font-bold bg-transparent">
            Share
          </Typography>
          <Avatar src={shareIcon} alt="share" className="mr-4 w-6 h-6" />
        </NavLink>
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
