import React from 'react';
import './Login.css';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add your client-side validation or other logic here
    // For example, you can use state to manage form data and perform validation
    // Once validation is successful, you can proceed with further actions
  };

  return (
    <div className="wrapper">
      <div className="align">
        <div className="grid">
          <h1 className='login-header'>LOGIN</h1>
          <form onSubmit={handleSubmit} className="form login">
            <div className="form__field">
              <label htmlFor="login__username">
                <svg className="icon">
                  <use xlinkHref="#icon-user"></use>
                </svg>
                <span className="hidden">Username</span>
              </label>
              <input autoComplete="username" id="login__username" type="text" name="username" className="form__input" placeholder="Username" required />
            </div>
            <div className="form__field">
              <label htmlFor="login__password">
                <svg className="icon">
                  <use xlinkHref="#icon-lock"></use>
                </svg>
                <span className="hidden">Password</span>
              </label>
              <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required />
            </div>
            <div className="form__field">
              <input type="submit" value="Sign In" />
            </div>
            <div className="form__field">
              <a href="/forgot" className="forgot-password">Forgot Password?</a>
            </div>
          </form>
          <p className="text--center">
            Not a member? <a href="/Signup">Sign up now</a>
            <svg className="icon">
              <use xlinkHref="#icon-arrow-right"></use>
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
