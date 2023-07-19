import "./Login.css";

const Login = () => {
  const userUrl = "../Assets/9024845_user_circle_light_icon.png";
  const passUrl = "../Assets/8679753_door_lock_fill_icon.png";
  return (
    <div className="Auth-container">
      <form className="Auth-container-form">
        <button className="open-btn">
          <img src={userUrl} alt="ui" />
        </button>
        <input type="text" placeholder="Username"></input>
        <br />
        <button className="open-btn">
          <img src={passUrl} alt="pi" />
        </button>
        <input type="password" placeholder="Password"></input>
        <br />
        <button type="submit" className="Login-btn">
          Login
        </button>
        <br />
        <button className="Link-btn">Forgot password?</button>
        <hr />
        <button className="Enter-btn">Create New Account</button>
      </form>
    </div>
  );
};

export default Login;
