import { Link } from "react-router-dom";
import "./Signin.css";
import LogInImg from "../../assets/loginimage.png";
import Logo from "../../assets/logoGhack.svg";
const Signin = () => {
  return (
    <div className="signIn-Grid">
      <div className="img-div">
        <img src={LogInImg} />
      </div>

      <div className="form-div">
        <Link to="/">
          <div className="sign-logo">
            <img src={Logo} /> <p>Track</p>
          </div>
        </Link>

        <div className="sign">
          <h2>Let’s get you logged to your account</h2>
          <form className="signin-form">
            <div>
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
            <p>You don&apos;t have an account?</p>
            <Link to="/signup">Create on</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
