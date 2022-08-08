import { useState } from "react";
import { atom, useAtom } from "jotai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable-next-line */
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const username = atom("");
export const email = atom("");
export const password = atom("");

const UserSignUp = ({ setPage, type, setType }) => {
  const [_username, setUsername] = useAtom(username);
  const [_email, setEmail] = useAtom(email);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [_password, setPassword] = useAtom(password);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmAge, setConfirmAge] = useState(false);

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

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmEmail = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    //needs to check for valid email
    //needs to check for no existing users
    e.preventDefault();

    if (type === "") return alert("Please select an account type.");
    else if (!isValidUsername())
      return alert("Username must be between 6 and 24 characters.");
    else if (!isValidEmail()) return alert("Email is not valid.");
    else if (_email !== confirmEmail) return alert("Emails don't match.");
    else if (!isValidPassword())
      return alert(
        "Password is not valid. Password needs to be at least 8 characters. Please try again."
      );
    else if (_password !== confirmPassword)
      return alert("Passwords do not match.");
    else if (!confirmAge)
      return alert("Please confirm your age before continuing.");

    setPage(1);
  };

  return (
    <>
      <div className="basic-signup-container">
        <form className="basic-signup-form mt-4 mx-14" onSubmit={handleSubmit}>
          <div className="basic-form-group">
            <label>Account Type</label>
            <select className="type-dropdown" onChange={handleType}>
              <option value="basic-signup">Select</option>
              <option value="student-signup">Students</option>
              <option value="teacher-signUp">Teacher</option>
            </select>
          </div>

          <div className="basic-form-group">
            <div className="title-group">
              <label>Username</label>
              <FontAwesomeIcon icon={faQuestionCircle} className="help-icon" />
              {isValidUsername() && (
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
              )}
            </div>
            <input
              type="text"
              onChange={handleUsername}
              className="basic-form-control"
            ></input>
            <p className="username-note">Please do not use your real name.</p>
          </div>

          <div className="input-group">
            <div className="basic-form-group inline-basic">
              <div className="title-group">
                <label htmlFor="email">Email Address</label>
                {isValidEmail() && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-icon"
                  />
                )}
              </div>
              <input
                type="email"
                name="email"
                onChange={handleEmail}
                className="basic-form-control"
                autoComplete="email"
              ></input>
            </div>
            <div className="basic-form-group inline-basic">
              <div className="title-group">
                <label htmlFor="email-confirm">Confirm Email Address</label>
                {confirmEmail && _email === confirmEmail && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-icon"
                  />
                )}
              </div>
              <input
                type="email"
                name="email"
                onChange={handleConfirmEmail}
                className="basic-form-control"
                autoComplete="email"
              ></input>
            </div>
          </div>

          <div className="input-group">
            <div className="basic-form-group inline-basic">
              <div className="title-group">
                <label htmlFor="password">Password</label>
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="help-icon"
                />
                {isValidPassword() && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-icon"
                  />
                )}
              </div>
              <input
                type="password"
                onChange={handlePassword}
                className="basic-form-control"
                autoComplete="new-password"
              ></input>
            </div>
            <div className="basic-form-group inline-basic">
              <div className="title-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                {confirmPassword && _password === confirmPassword && (
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="check-icon"
                  />
                )}
              </div>
              <input
                type="password"
                onChange={handleConfirmPassword}
                className="basic-form-control"
                autoComplete="new-password"
              ></input>
            </div>
          </div>

          <div className="basic-form-group">
            <label className="confirmation">
              <input
                type="checkbox"
                onClick={() => setConfirmAge(!confirmAge)}
                className="checkbox"
              />
              By checking this box, you are confirming that you are at least 13
              years of age or older.
            </label>
          </div>
          <button value="submit" className="next-button">
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default UserSignUp;
