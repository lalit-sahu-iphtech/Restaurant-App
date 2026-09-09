import { useEffect, useState } from "react";
import signInImg from "../../assets/img/logInImg.jpg";
import "./signUp.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Save users to localStorage whenever users array changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // check if email is already exist
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === formData.email.toLowerCase()
    );
    if (existingUser) {
      newErrors.email = "This email is already registered";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least one number";
    }
    
    setErrors(newErrors);

    // FIX 1: Corrected the return statement
    return Object.keys(newErrors).length === 0;
  };

  // FIX 2: Added missing 'e' parameter
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // create new user
      const newUser = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        email: formData.email.toLowerCase(),
        password: formData.password,
        createdAt: new Date().toISOString(),
      };

      // Add user to users Array
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1000);
    }
  };

  return (
    <>
      <section className="sign-up">
        <div className="sign-up-container">
          <div className="sign-up-image">
            <img src={signInImg} alt="sign up" />
          </div>
          <div className="sign-up-form">
            <div className="sign-up-content">
              <h2>Sign up</h2>
              <p>Create your Account</p>

              {isSubmitted && (
                <div className="success-message">
                  Account created successfully! You can now log in.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
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
                
                <button type="submit" className="sign-up-btn">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}