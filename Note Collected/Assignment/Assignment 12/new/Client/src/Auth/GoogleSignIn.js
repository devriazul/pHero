import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from '../components/Loading'
const GoogleSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  if (loadingGoogle) {
      return <Loading/>
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className=" px-8 pb-8">
              <p className=" text-error text-center mb-2">
                {errorGoogle && errorGoogle?.message}
              </p>
        <button
          className="btn btn-primary w-full  btn-outline"
          onClick={() => signInWithGoogle()}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
