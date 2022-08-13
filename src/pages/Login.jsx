import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, NavLink } from "react-router-dom";
import { useAtom } from "jotai";

import { users } from "../api";
import { userInSession } from "../App";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import SubmitButton from "../components/SubmitButton";

const Login = (props) => {
  const [user, setUser] = useAtom(userInSession);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) return;

    try {
      const res = await users.login(username, password);
      const user = res.data.data.user;
      setUser(user);
      navigate("/");
    } catch (err) {}
  };

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="flex flex-col align-middle content-center h-4/5">
            <div className="flex flex-col gap-6 w-full mt-32">
              <NavLink to="/">
                <Logo className="mx-auto mb-4" size="xl" />
              </NavLink>
              <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
                <Input
                  name="username"
                  autoComplete="username"
                  placeholder="Username"
                  className="mx-auto text-center w-4/5 sm:w-full max-w-lg"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  autoComplete="current-password"
                  name="password"
                  placeholder="Password"
                  className="mx-auto text-center w-4/5 sm:w-full max-w-lg"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <SubmitButton name="Log In" className="mx-auto" />
              </form>
              <a className="mx-auto font-bold text-blue-700" href="/">
                Forgot password?
              </a>
            </div>
            <Button
              className="mx-auto mb-12 mt-auto"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create account
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
