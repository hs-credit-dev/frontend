import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import "../../../styles/student-signup.styles.css";
import AccountCreationFooter from "../../../components/Footers/AccountCreationFooter";
import { students } from "../../../api";

import { username, email, password } from "./UserSignUp";
import { useAtom } from "jotai";

const StudentSignUp = () => {
  const [_username] = useAtom(username);
  const [_email] = useAtom(email);
  const [_password] = useAtom(password);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [bio, setBio] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  //redirect state variable
  const [redirect, setRedirect] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleName = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSchoolId = (e) => {
    setSchoolId(e.target.value);
  };

  const handleSchoolName = (e) => {
    setSchoolName(e.target.value);
  };

  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirmed) return alert("Please confirm your age before continuing.");

    students.create(
      _username,
      _email,
      _password,
      firstName,
      lastName,
      new Date(),
      schoolName,
      123456,
      bio
    );
  };

  if (redirect) return <Navigate to="/explore" />;

  return (
    <div className="student-signup-container">
      <form className="basic-signup-form mt-4 mx-14" onSubmit={handleSubmit}>
        <div className="row-group">
          <div className="inline-student">
            <label>First Name</label>
            <input
              type="text"
              onChange={handleFirstName}
              className="name-input student-form-control"
            ></input>
          </div>
          <div className="inline-student">
            <label>M.I.</label>
            <input
              type="text"
              onChange={handleMiddleName}
              className="mi-input student-form-control"
            ></input>
          </div>
          <div className="inline-student">
            <label>Last Name</label>
            <input
              type="text"
              onChange={handleLastName}
              className="name-input student-form-control"
            ></input>
          </div>
        </div>

        <div className="row-group my-4">
          <div className="inline-student">
            <label className="ceeb" htmlFor="ceeb-code">
              CEEB
              <a
                href="https://satsuite.collegeboard.org/k12-educators/tools-resources/k12-school-code-search"
                className="ceeb-code"
              >
                Find code here
              </a>
            </label>
            <input
              type="text"
              onChange={handleSchoolId}
              className="ceeb-input input-field student-form-control"
            />
          </div>

          <div className="inline-student">
            <label className="school-name" htmlFor="school-name">
              School Name
            </label>
            <input
              type="text"
              onChange={handleSchoolName}
              className="input-field school-name-input student-form-control"
            />
          </div>
        </div>

        <label>Bio</label>
        <textarea
          type="text"
          onChange={handleBio}
          className="bio-input student-form-control"
        ></textarea>

        <label className="confirmation">
          <input
            type="checkbox"
            onClick={() => setConfirmed(!confirmed)}
            className="checkbox"
          />
          By checking this box, you are confirming that you are at least 13
          years of age or older. You are also consenting to our terms/services
          and Data Use Policy.
        </label>

        <button value="submit" className="submit">
          Create Account
        </button>
      </form>
      <AccountCreationFooter />
    </div>
  );
};

export default StudentSignUp;
