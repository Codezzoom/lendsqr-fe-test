import "./Login.scss";
import logo from "../../assets/images/logo.png";
import loginIllustration from "../../assets/images/pablo-sign-in 1.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  }

  return (
    <main className="login">
      <section className="login__left">
        <img src={logo} alt="Lendsqr logo" className="login__logo" />
        <img
          src={loginIllustration}
          alt="Login illustration"
          className="login__illustration"
        />
      </section>

      <section className="login__right">
        <form className="login__form">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <input type="email" placeholder="Email" aria-label="Email" />

          <div className="login__password">
            <input type="password" placeholder="Password" aria-label="Password" />
            <button type="button">SHOW</button>
          </div>

          <a href="#" className="login__forgot">
            FORGOT PASSWORD?
          </a>

          <button type="submit" className="login__button" onClick={handleLogin}>
            LOG IN
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;