import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/g-logo.png";

const GoogleSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    if (user) {
        navigate(from, {replace: true });
      }
  return (
    <div>
      <p className="text-danger text-center mt-1">{errorGoogle?.message}</p>
      <div className="separator d-flex align-items-center">
        <div className="w-100 line mx-3"></div>
        <span className="orange">Or</span>
        <div className="w-100 line mx-3"></div>
      </div>

      <div className="pop-up-authorize my-3 d-flex justify-content-center">
        <Button onClick={() => signInWithGoogle()}>
          <img src={google} height={40} className="rounded-3 me-3" alt="" />
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
