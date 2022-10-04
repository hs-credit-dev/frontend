import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAtom } from "jotai";

import * as users from "api/users";
import { userInSession } from "../App";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import SubmitButton from "../components/SubmitButton";

const Login = () => {
  const [user, setUser] = useAtom(userInSession);
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.username.value || !e.target.password.value) return;

    setWarning("");

    try {
      const res = await users.login(e.target.username.value, e.target.password.value);
      const user = res.data?.data?.user;
      if (!user) {
        setWarning("incorrect username or password");
        return;
      }
      setUser(user);
      navigate("/");
    } catch (err) { }
  };

  useEffect(() => {
    if (user) {
      return navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <>
      <div className="flex flex-col items-center grow py-16">
        <div className="flex flex-col items-center my-auto w-full gap-4">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <form className="flex flex-col gap-8 items-center w-full" onSubmit={handleSubmit}>
            <Input
              name="username"
              autoComplete="username"
              placeholder="Username"
              className="w-full max-w-md"
            />
            <Input
              type="password"
              autoComplete="current-password"
              name="password"
              placeholder="Password"
              className="w-full max-w-md"
            />
            <SubmitButton name="Log In" className="mx-auto" />
          </form>
          <a className="font-bold text-hslink" href="/">
            Forgot password?
          </a>
          <p className="text-hswarn font-bold">{warning}</p>
        </div>
        <NavLink to="/signup" className="mt-auto">
          <Button>Create account</Button>
        </NavLink>
      </div>
    </>
  );
};

export default Login;
