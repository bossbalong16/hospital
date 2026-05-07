import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./Login.css"; // Reuse the same CSS
import mainLogo from "../assets/icons/mainLogo.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // 1. Register the user
      const registerResponse = await axios.post("http://localhost:8080/api/auth/register", {
        email,
        password
      });

      // 2. Automatically log them in with the response data
      login(registerResponse.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data || "Registration failed. Email might already exist.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Left Logo */}
      <img src={mainLogo} className="left-logo" alt="logo" />
      <img src={mainLogo} className="right-logo" alt="logo" />

      {/* Register Form */}
      <form className="login-form" onSubmit={handleRegister}>
        <h2 className="title">Sign up</h2>

        {error && <div style={{ color: '#ffb3b3', marginBottom: '10px', fontSize: '14px' }}>{error}</div>}

        <input
          type="email"
          placeholder="📧 Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="🔒 Password"
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit" className="login-btn" style={{ marginTop: '20px' }} disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign up"}
        </button>

        <h6 className="signup">
          Already have an account? <Link to="/login">Log in</Link>
        </h6>
      </form>
    </div>
  );
}

export default Register;
