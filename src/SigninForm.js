import React from 'react';

export const SigninForm = () => {
  const submit = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('https://gym-management-2.onrender.com/accounts/user_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok) {
        console.log('Login successful:', data);
        // Perform any actions upon successful login, like saving the token, redirecting, etc.
      } else {
        console.log('Login failed:', data.message);
        // Handle login error, like showing an error message to the user.
      }

    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  return (
    <>
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign In</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" id="username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" id="password" />
        </div>
        <input  type="submit" onClick={submit} value="Login" className="btn solid" />
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    </>
  );
};
