import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

import * as students from "api/students";
import { is2XXResponse } from "util/axios";
import { username, email, password } from "./SignUpUser";
import { resetState } from "./../utils";

import Input from 'components/Input';
import Button from 'components/Button';
import SubmitButton from 'components/SubmitButton';

const SignUpStudent = () => {
  const navigate = useNavigate();

  // User State
  const [_username] = useAtom(username);
  const [_email] = useAtom(email);
  const [_password] = useAtom(password);

  // Student State
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [bio, setBio] = useState("");

  const [confirmed, setConfirmed] = useState(false);
  const [warning, setWarning] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirmed)
      return setWarning("Please confirm your age before continuing");

    try {
      const res = await students.create(
        _username,
        _email,
        _password,
        firstName,
        lastName,
        dob,
        schoolName,
        schoolId,
        bio
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
        className="flex flex-col md:grid md:grid-cols-3 gap-16 py-16 px-4 md:px-16 max-w-7xl"
        onSubmit={handleSubmit}
      >
        <span className="col-span-3 flex flex-col md:flex-row gap-12">
          <span className="grow">
            <Input
              name="first-name"
              label={"First Name"}
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </span>
          <Input
            name="middle-name"
            label={"M.I."}
            autoComplete="additional-name"
            value={middleName}
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
              value={lastName}
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
            value={dob}
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
                <span className="flex items-center gap-4">
                  <p>CEEB</p>
                  <a
                    href="https://satsuite.collegeboard.org/k12-educators/tools-resources/k12-school-code-search"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="h-8 p-2 w-32 ">Find CEEB code</Button>
                  </a>
                </span>
              }
              value={schoolId}
              onChange={(e) => {
                setSchoolId(e.target.value);
              }}
            />
          </span>
          <span className="col-span-3">
            <Input
              name="school-name"
              label="School Name"
              value={schoolName}
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
            label="Bio (optional)"
            value={bio}
            inputClassName="h-64"
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
