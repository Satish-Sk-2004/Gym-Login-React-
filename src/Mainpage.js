import React from 'react';
import { SignupForm } from './SignupForm';
import { SigninForm } from './SigninForm';
import { Toggle } from './Toggle';
import { useEffect } from 'react';

export const Mainpage = () => {
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
    <>
        <div className="App">
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <SigninForm/>
         <SignupForm/>
        </div>
      </div>
      <Toggle/>
      <p>
        <a href="#">
          <span><img src="./images/fitclublogo.png" alt="FitClub" class="fclogo transparent"/></span>
        </a>
      </p>
    </div>

    </div>
    </>
  )
}
