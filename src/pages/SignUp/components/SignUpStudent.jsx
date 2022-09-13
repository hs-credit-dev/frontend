import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";

import { students, is2XXResponse } from "../../../api_fake";
import { username, email, password } from "./SignUpUser";
import { resetState } from "./../utils";

import Input from "../../../components/Input";
import SubmitButton from "../../../components/SubmitButton";

export const firstName = atom("");
export const middleName = atom("");
export const lastName = atom("");
export const dob = atom("");
export const schoolId = atom("");
export const schoolName = atom("");
export const bio = atom("");

const SignUpStudent = () => {
  const navigate = useNavigate();

  // User State
  const [_username] = useAtom(username);
  const [_email] = useAtom(email);
  const [_password] = useAtom(password);

  // Student State
  const [_firstName, setFirstName] = useAtom(firstName);
  const [_middleName, setMiddleName] = useAtom(middleName);
  const [_lastName, setLastName] = useAtom(lastName);
  const [_dob, setDob] = useAtom(dob);
  const [_schoolId, setSchoolId] = useAtom(schoolId);
  const [_schoolName, setSchoolName] = useAtom(schoolName);
  const [_bio, setBio] = useAtom(bio);

  const [confirmed, setConfirmed] = useState(false);
  const [warning, setWarning] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirmed)
      return setWarning("Please confirm your age before continuing.");

    try {
      const res = await students.create(
        _username,
        _email,
        _password,
        _firstName,
        _lastName,
        _dob,
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
        className="flex flex-col md:grid md:grid-cols-3 gap-12 py-16 px-4 md:px-16 max-w-7xl"
        onSubmit={handleSubmit}
      >
        <span className="col-span-3 flex flex-col md:flex-row gap-12">
          <span className="grow">
            <Input
              name="first-name"
              label={"First Name"}
              autoComplete="given-name"
              value={_firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </span>
          <Input
            name="middle-name"
            label={"M.I."}
            autoComplete="additional-name"
            value={_middleName}
            className="w-12"
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
          <span className="grow">
            <Input
              name="last-name"
              label={"Last Name"}
              autoComplete="family-name"
              value={_lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </span>
        </span>

        <span className="col-span-3 mt-6">
          <Input
            type="date"
            name="dob"
            label={"Date of Birth"}
            autoComplete="bday"
            value={_dob}
            className="h-20"
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </span>
        <span className="col-span-3 flex flex-col md:grid md:grid-cols-6 gap-12">
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
        </span>
        <span className="col-span-3">
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
        <div className="col-span-3 flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              name="age-check"
              onClick={() => setConfirmed(!confirmed)}
              className="border-none h-10 drop-shadow-lg"
              value={confirmed}
            />
            <p className="italic text-sm font-semibold">
              By checking this box, you are confirming that you are at least 13
              years of age or older. You are also consenting to our
              terms/services and Data Use Policy.
            </p>
          </span>
          <SubmitButton name="Create Account" />
          {warning && <p className="text-red-600 font-bold">{warning}</p>}
        </div>
      </form>
    </>
  );
};

export default SignUpStudent;
