import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";

import { teachers, is2XXResponse } from "../../../api";
import { username, email, password } from "./SignUpUser";
import { resetState } from "./../utils";

import Input from "../../../components/Input";
import SubmitButton from "../../../components/SubmitButton";

export const schoolId = atom("");
export const schoolName = atom("");
export const schoolWebsite = atom("");
export const bio = atom("");

const SignUpTeacher = () => {
  const navigate = useNavigate();

  // User State
  const [_username] = useAtom(username);
  const [_email] = useAtom(email);
  const [_password] = useAtom(password);

  // Teacher State
  const [_schoolId, setSchoolId] = useAtom(schoolId);
  const [_schoolName, setSchoolName] = useAtom(schoolName);
  const [_schoolWebsite, setSchoolWebsite] = useAtom(schoolWebsite);
  const [_bio, setBio] = useAtom(bio);

  const [confirmed, setConfirmed] = useState(false);
  const [warning, setWarning] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirmed)
      return setWarning(
        "Please agree to our terms/services and Privacy Policy before continuing."
      );

    try {
      const res = await teachers.create(
        _username,
        _email,
        _password,
        "",
        "",
        new Date(),
        _schoolName,
        _schoolId,
        _bio
      );

      if (is2XXResponse(res.status)) {
        resetState();
        navigate("/");
      } else {
        setWarning(res.data.message);
      }
    } catch (err) { }
  };

  return (
    <>
      <form
        className="flex flex-col md:grid md:grid-cols-6 gap-12 py-16 px-4 md:px-16 max-w-7xl"
        onSubmit={handleSubmit}
      >
        <span className="col-span-2">
          <Input
            name="school-id"
            label={
              <>
                <p>CEEB</p>
                <a
                  href="https://satsuite.collegeboard.org/k12-educators/tools-resources/k12-school-code-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto"
                >
                  <p className="text-blue-700">Find code here</p>
                </a>
              </>
            }
            value={_schoolId}
            onChange={(e) => {
              setSchoolId(e.target.value);
            }}
          />
        </span>
        <span className="col-span-3">
          <Input
            name="school-name"
            label="School Name"
            value={_schoolName}
            onChange={(e) => {
              setSchoolName(e.target.value);
            }}
          />
        </span>
        <span className="col-span-3">
          <Input
            name="school-website"
            label={"School Website"}
            autoComplete={"url"}
            value={_schoolWebsite}
            onChange={(e) => {
              setSchoolWebsite(e.target.value);
            }}
          />
        </span>
        <span className="col-span-6">
          <Input
            type="textarea"
            name="bio"
            label="Bio"
            value={_bio}
            className="h-64"
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </span>

        <div className="col-span-6 flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              name="age-check"
              onClick={() => setConfirmed(!confirmed)}
              className="border-none h-10 drop-shadow-lg"
              value={confirmed}
            />
            <p className="italic text-sm font-semibold">
              By checking this box, you are consenting to our terms/services and
              Privacy Policy.
            </p>
          </span>
          <SubmitButton name="Create Account" />
          {warning && <p className="text-red-600 font-bold">{warning}</p>}
        </div>
      </form>
    </>
  );
};

export default SignUpTeacher;
