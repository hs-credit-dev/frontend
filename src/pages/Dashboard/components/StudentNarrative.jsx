import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const StudentNarrative = () => {
  const [edit, setEdit] = useState(1);
  const [narrative, setNarrative] = useState("");

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleNarrative = (e) => {
    setNarrative(e.target.value);
    console.log(narrative);
  };

  return (
    <div className="bg-transparent">
      <FontAwesomeIcon
        onClick={handleEdit}
        icon={faPenToSquare}
        className="bg-transparent float-right cursor-pointer"
      />

      <textarea
        id="narrative"
        rows="4"
        disabled={edit}
        onChange={handleNarrative}
        className="bg-white shadow-xl w-full h-56 mx-auto mt-8 rounded-3xl p-10 w-full h-4/5 font-normal text-sm focus:none"
        placeholder="Click the edit button on the right to edit"
      ></textarea>
    </div>
  );
};

export default StudentNarrative;
