import { useEffect, useState } from "react";
import signInImg from "../../assets/img/logInImg.jpg";
import "./signIn.css";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear login error when user starts typing
    if (loginError) {
      setLoginError("");
    }
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    if (validateForm()) {
      // Check if user exists
      const existingUser = users.find(
        (user) => 
          user.email.toLowerCase() === formData.email.toLowerCase() &&
          user.password === formData.password
      );

      if (existingUser) {
        // Login successful
        setIsSubmitted(true);
        setFormData({
          email: "",
          password: "",
        });

        // Save current logged in user
        localStorage.setItem("currentUser", JSON.stringify(existingUser));

        // Hide success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        // Check if email exists but password is wrong
        const emailExists = users.find(
          (user) => user.email.toLowerCase() === formData.email.toLowerCase()
        );
        
        if (emailExists) {
          setLoginError("Incorrect password. Please try again.");
        } else {
          setLoginError("No account found with this email. Please sign up first.");
        }
      }
    }
  };

  return (
    <section className="sign-in">
      <div className="sign-in-container">
        <div className="sign-in-image">
          <img src={signInImg} alt="sign in" />
        </div>
        <div className="sign-in-form">
          <div className="sign-in-content">
            <h2>Login</h2>
            <p>Enter your email to log in.</p>

            {isSubmitted && (
              <div className="success-message">
                 Login successful! Welcome back!
              </div>
            )}

            {loginError && (
              <div className="error-message">
                 {loginError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error" : ""}
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>
              
              <button type="submit" className="sign-in-btn">
                Sign In
              </button>
            </form>

            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}