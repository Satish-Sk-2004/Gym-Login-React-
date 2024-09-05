import { useEffect } from 'react';
import './App.css';
import { SignupForm } from './SignupForm';
import { SigninForm } from './SigninForm';


function App() {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    if (sign_up_btn && sign_in_btn && container) {
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });

      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    }
  }, []);
  return (
    <div className="App">
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <SigninForm/>
         <SignupForm/>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content con1">
            <h3>New here . . ?</h3>
            <p>
              Sign up to join the community of fitness professionals and shape your body and mind
            </p>
            <button class="btn transparent" id="sign-up-btn">Sign up</button>
          </div>
          <img src="./images/gym1.jpeg" class="image gym1" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content con2">
            <h3>Already have an account . . ?</h3>
            <p>
              Log in to return to the community of fitness professionals and continue shaping and body !
            </p>
            <button class="btn transparent" id="sign-in-btn">Sign in</button>
          </div>
          <img src="./images/gym2.jpeg" class="image gym2" alt="" />
        </div>
      </div>
      <p>
        <a href="#">
          <span><img src="./images/fitclublogo.png" alt="FitClub" class="fclogo transparent"/></span>
        </a>
      </p>
    </div>

    </div>
  );
}

export default App;
