import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import mainLogo from "../assets/icons/mainLogo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: dito mo ilalagay validation later (database)
    
    navigate("/doctor"); // 🔥 redirect to doctor homepage
  };

  return (
    <div className="container">

      {/* LEFT LOGO */}
      <img src={mainLogo} className="left-logo" alt="logo" />
      <img src={mainLogo} className="right-logo" alt="logo" />

      {/* LOGIN FORM CENTER */}
      <div className="login-form">

        <h2 className="title">Log in</h2>

        <input
          type="text"
          placeholder="👤 User_ID"
          className="input"
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="🔒 Password"
            className="password-input"
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#">Forgot password?</a>
        </div>

        {/* 🔥 CONNECTED BUTTON */}
        <button className="login-btn" onClick={handleLogin}>
          Log in
        </button>

        
      </div>
    </div>
  );
}

export default Login;