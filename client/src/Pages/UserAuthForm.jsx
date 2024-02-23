import React from "react";
import expense from "../assets/expense.jpg"
import { Link } from "react-router-dom";

const UserAuthForm = ({ type }) => {
  // if (type === "login") {
  return (
    <div className="h-[calc(100vh-64px)] flex">
      <img
        className="hidden md:flex ml-10"
        src={expense}
        alt="image"
      />
      <div className="flex w-full h-full justify-center items-center">
        <form className="md:w-1/2 text-center">
          <h1 className="text-3xl text-center font-bold">
            {type === "login" ? "LOGIN" : "REGISTER"}
          </h1>
          <div className="w-full h-full flex items-center flex-col rounded-lg">
            <div className="inputs flex flex-col gap-3 my-3">
              {type === "register" && (
                <input
                  placeholder="Name"
                  name="text"
                  type="text"
                  className="bg-[#e7e6e9] rounded-lg w-full md:w-56 h-10 pl-3"
                />
              )}

              <input
                placeholder="Email"
                name="email"
                type="email"
                className="bg-[#e7e6e9] rounded-lg w-full md:w-56 h-10 pl-3"
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="bg-[#e7e6e9] rounded-lg w-full md:w-56 h-10 pl-3"
              />
            </div>

            <div className="bottom">
              <a className="text-[#9f93da] text-xs hover:underline underline-offset-2 rounded-lg mr-2">
                forgot password
              </a>
              <Link
                className="text-[#9f93da] text-xs hover:underline underline-offset-2 rounded-lg ml-2"
                to={type === "login" ? "/register" : "/login"}
              >
                Signup
              </Link>
            </div>

            <button className="h-10 w-full md:w-56 mt-4 text-white font-bold bg-[#7B68DB] rounded-lg align-middle text-center">
              {
                type === "login" ? "Login" : "Register"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  // } else if (type === "register") {
  //   return (
  //     <div className="flex flex-col md:flex-row h-[calc(100vh-70px)]">
  //       <img
  //         className="w-full md:w-[40vw] h-[40vh] md:h-full"
  //         src={front}
  //         alt="image"
  //       />
  //       <div className="flex w-full h-full justify-center items-center">
  //         <form className="md:w-1/2 text-center">
  //           <h1 className="text-3xl text-center font-bold">REGISTER</h1>
  //           <div className="w-full h-full rounded-lg">
  //             <input
  //               placeholder="Name"
  //               name="text"
  //               type="text"
  //               className="bg-[#e7e6e9] rounded-lg mt-4 w-full md:w-56 h-10 pl-3"
  //             />
  //             <br />
  //             <input
  //               placeholder="Email"
  //               name="email"
  //               type="email"
  //               className="bg-[#e7e6e9] rounded-lg mt-4 w-full md:w-56 h-10 pl-3"
  //             />
  //             <br />
  //             <input
  //               type="password"
  //               placeholder="Password"
  //               name="password"
  //               className="bg-[#e7e6e9] rounded-lg mt-4 w-full md:w-56 h-10 pl-3"
  //             />
  //             <br />
  //             <a className="text-[#9f93da] text-xs hover:bg-gray-200 rounded-lg mr-2">
  //               forgot password
  //             </a>
  //             <Link
  //               className="text-[#9f93da] text-xs hover:bg-gray-200 rounded-lg ml-2"
  //               to={"/login"}
  //             >
  //               Login
  //             </Link>
  //             <br />
  //             <button className="h-10 w-full md:w-56 mt-4 text-white font-bold bg-[#7B68DB] rounded-lg align-middle text-center">
  //               Register
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  // );
  // }
};

export default UserAuthForm;
