import axios from "axios";
import React from "react";

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // First send OTP
      const response = await fetch("http://localhost:3008/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email }),
      });

      const data = await response.json();

      if (data.msg === "success") {
        // Show OTP verification component
        setShowOTPVerification(true);
      } else {
        setError(data.data);
      }
    } catch (err) {
      setError("Failed to send OTP");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <input
        placeholder="Username"
        className="border-black border-2 px-4 py-2"
        id="username"
        type="text"
      />
      <input
        placeholder="Password"
        className="border-black border-2 px-4 py-2 ml-6 mr-6"
        id="pass"
        type="text"
      />
      <button className="px-6 py-3 rounded-lg bg-red-600" onClick={handleLogin}>
        {" "}
        Click Me
      </button>
    </div>
  );
};

export default Login;
