import React from 'react';

export const Toggle = () => {
  return (
    <>
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
    </>
  )
}
