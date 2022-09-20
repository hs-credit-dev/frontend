import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { students } from "../../../api_fake";
import { useAtom } from 'jotai';
import { userInSession } from './../../../App';

const Narrative = () => {
  const [user] = useAtom(userInSession);
  const [isEditing, setisEditing] = useState(false);
  const [editingMessage, setEditingMessage] = useState("");
  const [narrative, setNarrative] = useState("");

  useEffect(() => {
    if (!students.isStudent(user)) return;
    students.get(user.studentId).then(res => {
      const student = res.data.data.student;
      setNarrative(student.narrative);
    });
  }, [user]);

  return (
    <div className="flex flex-col w-full">
      <div className="self-end mr-2 flex items-center gap-2">
        <p>{editingMessage}</p>
        <FontAwesomeIcon
          onClick={async () => {
            setisEditing(!isEditing);
            setEditingMessage("Editing...");
            if (!isEditing) return;
            if (!students.isStudent(user)) return;
            const res = await students.get(user.studentId);
            const student = res.data.data.student;
            student.narrative = narrative;
            await students.update(student);
            setEditingMessage("Saved!");
          }}
          icon={faPenToSquare}
          className="cursor-pointer select-none mr-12"
        />
      </div>

      <textarea
        id="narrative"
        rows="4"
        disabled={!isEditing}
        onChange={(e) => {
          setNarrative(e.target.value);
        }}
        value={narrative}
        className="shadow-xl mx-auto mt-8 mb-4 rounded-3xl p-10 w-11/12 h-4/5 font-normal text-sm resize-none"
        placeholder="Click the edit button on the right to edit"
      ></textarea>
    </div>
  );
};

export default Narrative;
