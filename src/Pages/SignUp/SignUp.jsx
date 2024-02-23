import { Link } from "react-router-dom";
import Logo from "../../assets/logoGhack.svg";
import "./Signup.css";

const SignUp = () => {
  return (
    <div className="s-up">
      <Link to="/" className="sign-up-logo">
        <div className="sign-logo">
          <img src={Logo} /> <p>Track</p>
        </div>
      </Link>
      <div className="form-div-signup">
        <div className="sign-up">
          <form className="signup-form">
            <div>
              <h2>Create your account to start!</h2>
              <div className="fullname">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your Last Name"
                    required
                  />
                </div>
              </div>
              <label htmlFor="email">E-mail adress</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <Link to="/WorkSpace">
              <button className="btn-start">Start</button>
            </Link>
          </form>

          <span></span>
          <div className="create-link">
            <p>Already have an account?</p>
            <Link to="/signin">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
