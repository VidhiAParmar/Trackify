import asyncHandler from "express-async-handler";

const register = asyncHandler(async (req, res) => {
  console.log("Registering user...");
  res.send("Registering user...");
});

const login = asyncHandler(async (req, res) => {
  console.log("Logging in user...");
  res.send("Logging in user...");
});

const logout = asyncHandler(async (req, res) => {
  console.log("Logging out user...");
  res.send("Logging out user...");
});


const forgotPassword = asyncHandler(async (req, res) => {
    console.log("Forgot password...");
    res.send("Forgot password...");
    }
);


export { register, login, logout, forgotPassword };