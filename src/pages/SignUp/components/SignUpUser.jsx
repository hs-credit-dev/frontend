import { useState } from "react";
import { atom, useAtom } from "jotai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

// Components
import Input from "../../../components/Input";
import SubmitButton from "./../../../components/SubmitButton";

// SignUp State
import { page, userType } from "..";

// User State
export const username = atom("");
export const email = atom("");
export const password = atom("");

/* eslint-disable-next-line */
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const SignUpUser = () => {
  // SignUp State
  const [, setPage] = useAtom(page);
  const [type, setType] = useAtom(userType);

  // User State
  const [_username, setUsername] = useAtom(username);
  const [_email, setEmail] = useAtom(email);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [_password, setPassword] = useAtom(password);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [warning, setWarning] = useState("");

  const isValidUsername = () => {
    return _username.length >= 6 && _username.length <= 24;
  };

  const isValidEmail = () => {
    return emailRegex.test(_email);
  };

  const isValidPassword = () => {
    return (
      _password.length >= 8 && _password.length <= 16 && _username !== _password
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "") return setWarning("Please select an account type.");
    else if (!isValidUsername())
      return setWarning("Username must be between 6 and 24 characters.");
    else if (!isValidEmail()) return setWarning("Email is not valid.");
    else if (_email !== confirmEmail) return setWarning("Emails don't match.");
    else if (!isValidPassword())
      return setWarning(
        "Password is not valid. Password needs to be at least 8 characters. Please try again."
      );
    else if (_password !== confirmPassword)
      return setWarning("Passwords do not match.");

    setPage(1);
  };

  return (
    <>
      <form
        className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-5 md:auto-cols-fr gap-16 py-16 px-4 md:px-16"
        onSubmit={handleSubmit}
      >
        <Input
          type="select"
          name="account-type"
          label="Account Type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="student">Students</option>
          <option value="teacher">Teacher</option>
        </Input>
        <span></span>
        <Input
          name="username"
          label={
            <>
              <p>Username</p>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="cursor-pointer"
              />
            </>
          }
          small="Please do not use your real name"
          autoComplete="username"
          value={_username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <span></span>
        <Input
          name="email"
          label={
            <>
              <p>Email Address</p>
              {isValidEmail() && (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </>
              )}
            </>
          }
          autoComplete="email"
          value={_email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          name="confirm-email"
          label={
            <>
              <p>Confirm Email Address</p>
              {confirmEmail && _email === confirmEmail && (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </>
              )}
            </>
          }
          autoComplete="email"
          value={confirmEmail}
          onChange={(e) => {
            setConfirmEmail(e.target.value);
          }}
        />
        <Input
          name="password"
          type="password"
          label={
            <>
              <p>Password</p>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="cursor-pointer"
              />
              {isValidPassword() && (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </>
              )}
            </>
          }
          autoComplete="new-password"
          value={_password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          name="confirm-password"
          type="password"
          label={
            <>
              <p>Confirm Password</p>
              {confirmPassword && _password === confirmPassword && (
                <>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </>
              )}
            </>
          }
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <span className="col-span-2 flex flex-col gap-2">
          <SubmitButton name="Next" />
          {warning && <p className="text-red-600 font-bold">{warning}</p>}
        </span>
      </form>
    </>
  );
};

export default SignUpUser;
