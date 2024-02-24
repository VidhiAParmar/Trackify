import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const InputBox = ({
    type,
    name,
    placeholder,
    handleChange,
}) => {
    const [showPassword, setShowPassword] = useState(false);
     const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <div>
      <div className="inputs flex flex-col gap-3 my-3">
      <input
          name={name}
          type={
            type == "password"
              ? id == "password"
                ? showPassword
                  ? "text"
                  : "password"
                : confirmPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          onChange={handleChange}
          className="bg-[#e7e6e9] rounded-lg w-full md:w-56 h-10 pl-3"
        />
        {type == "password" ? (
          <div
            className="text-gray-400 input-icon left-[auto] right-3 p-3 cursor-pointer h-full flex items-center justify-center"
            onClick={
              id == "password"
                ? () => setShowPassword(!showPassword)
                : () => setConfirmPassword(!confirmPassword)
            }
          >
            {id == "password" ? (
              showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )
            ) : confirmPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default InputBox
