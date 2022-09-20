import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAtom } from "jotai";

import { users } from "../api_fake";
import { userInSession } from "../App";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import SubmitButton from "../components/SubmitButton";

const Login = () => {
  const [user, setUser] = useAtom(userInSession);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) return;

    try {
      setWarning("");
      const res = await users.login(username, password);
      const user = res.data.data.user;
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
      <div className="flex flex-col align-middle my-auto h-4/5">
        <div className="flex flex-col gap-6 mt-auto">
          {/* <NavLink to="/"> */}
          <Logo className="mx-auto mb-4" />
          {/* </NavLink> */}
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <Input
              name="username"
              autoComplete="username"
              placeholder="Username"
              className="mx-auto text-center w-4/5 sm:w-full max-w-lg"
              onChange={(e) => {
                setWarning("");
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
                setWarning("");
                setPassword(e.target.value);
              }}
            />
            <SubmitButton name="Log In" className="mx-auto" />
          </form>
          <a className="mx-auto font-bold text-blue-700" href="/">
            Forgot password?
          </a>
          <p className="mx-auto text-red-600 font-bold">{warning}</p>
        </div>
        <NavLink to="/signup" className="mx-auto mb-12 mt-auto">
          <Button>Create account</Button>
        </NavLink>
      </div>
    </>
  );
};

export default Login;
