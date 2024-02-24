import React, { useEffect } from "react";
import expense from "../assets/expense.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const UserAuthForm = ({ type }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(type);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }, [navigate]);

  useEffect(() => {
    setFormData({ email: "", password: "", confirmPassword: "" });
  }, [type]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute = type === "login" ? "login" : "register";
    const { email, password } = formData;
    if (!email.length) {
      return toast.error("Email is required");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is not valid");
    }
    if (!password.length) {
      return toast.error("Password is required");
    }
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"
      );
    }
    if (type === "register") {
      if (!formData.fullname.length) {
        return toast.error("Name is required");
      }

      if (!formData.confirmPassword.length) {
        return toast.error("Confirm Password is required");
      }
      if (formData.confirmPassword !== formData.password) {
        return toast.error("Password and Confirm Password must be same");
      }
    }
    if (password.length && email.length) {
      // userAuth(serverRoute, formData);
      console.log(formData);

      if (type === "login") {
        toast.success("Logged in successfully");
        setTimeout(() => {
          navigate("/home");
          setFormData({ email: "", password: "" });
          localStorage.setItem("user", JSON.stringify(formData));
        }, 1000);
      } else {
        toast.success("Registered successfully");
        setTimeout(() => {
          navigate("/login");
          setFormData({ email: "", password: "", confirmPassword: "" });
        }, 1000);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] w-full flex">
      <img
        className="hidden md:flex ml-10 w-3/5 xl:w-1/2"
        src={expense}
        alt="image"
      />
      <div className="flex w-1/2 h-full justify-center items-center">
        <Toaster />
        <form className="w-full">
          <h1 className="text-3xl text-center font-bold">
            {type === "login" ? "LOGIN" : "REGISTER"}
          </h1>
          <div className="w-full h-full flex items-center flex-col rounded-lg">
            <div className="inputs flex flex-col gap-3 my-3">
              {type === "register" && (
                <input
                  placeholder="Name"
                  value={formData.fullname}
                  name="fullname"
                  type="text"
                  className="bg-[#e7e6e9] rounded-lg w-full md:w-56 h-10 pl-3"
                  onChange={handleChange}
                />
              )}

              <input
                placeholder="Email"
                name="email"
                value={formData.email}
                type="email"
                className="bg-[#e7e6e9] rounded-lg w-full md:w-56 h-10 pl-3"
                onChange={handleChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                className="bg-[#e7e6e9] rounded-lg w-full md:w-56 h-10 pl-3"
                onChange={handleChange}
              />
              {type === "register" && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  className="bg-[#e7e6e9] rounded-lg w-full md:w-56 h-10 pl-3"
                  onChange={handleChange}
                />
              )}
            </div>

            <div className="bottom">
              <a className="text-[#9f93da] text-xs hover:underline underline-offset-2 rounded-lg mr-2">
                forgot password
              </a>
              <Link
                className="text-[#9f93da] text-xs hover:underline underline-offset-2 rounded-lg ml-2"
                to={type === "login" ? "/register" : "/login"}
              >
                {type === "login" ? "Register" : "Login"}
              </Link>
            </div>

            <button
              className="h-10 w-full md:w-56 mt-4 text-white font-bold bg-[#7B68DB] rounded-lg align-middle text-center"
              onClick={handleSubmit}
            >
              {type === "login" ? "Login" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAuthForm;
