import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import GoogleSignIn from "./GoogleSignIn";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // initialize the hook

  if (loading) {
    return <Loading />;
  }
  if (user) {
    const email = user.email;
    console.log(user);
    // send updated product to database
    if (email !== null) {
      // update user info
      fetch(`https://etools-server.herokuapp.com/newUser/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // toast.info("Updated Done!", { theme: "colored" });
        });
    }

    // make automatic admin if user CEO
    if (email === process.env.REACT_APP_ceoEmail) {
      const makeAdmin = { isAdmin: true };
      fetch(`https://etools-server.herokuapp.com/newUser/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(makeAdmin),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }

    navigate(from, { replace: true });
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <h1 className="text-4xl">Welcome Back!</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card flex-shrink-0 shadow-2xl bg-base-100 w-2/3 lg:w-1/3"
        >
          <div className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register(
                  "email",
                  { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
                  { required: true, maxLength: 250 }
                )}
              />

              {errors.email && (
                <p className="text-error text-sm">Valid Email Required.</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 250,
                  message: "custom message",
                })}
              />
              {errors.password && (
                <p className="text-error text-sm">Minimum 6 Length Require</p>
              )}
              <label className="label">
                <Link to="/resetPassword" className="label-text-alt link link-hover">
                  Reset Password!
                </Link>
              </label>
              <label className="label">
                <Link to="/signup" className="label-text-alt link link-hover">
                  New Here?
                </Link>
              </label>
            </div>
            <div className="form-control mt-1">
              <p className=" text-error text-center mb-2">
                {error && error?.message}
              </p>
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </div>
          <div className="divider">OR</div>
          <GoogleSignIn />
        </form>
      </div>
    </div>
  );
};

export default Login;
