import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../firebase.init";
import GoogleSignIn from "./GoogleSignIn";
import { toast } from "react-toastify";
import { async } from "@firebase/util";

const SignUp = () => {
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [
    sendEmailVerification,
    sendingEmailVerification,
    errorEmailVerification,
  ] = useSendEmailVerification(auth);
  const verifyEmail = async () => {
    await sendEmailVerification();
    toast.info("Sent email! Please Verify", { theme: "colored" });
  };

  const handelForm = async (e) => {
    e.preventDefault();
    const fName = e.target.fname.value;
    const lName = e.target.lname.value;
    const name = fName + " " + lName;
    const eMail = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    // const cPassword = e.target.conformpassword.value;
    const photo = e.target.photo.value;
    await createUserWithEmailAndPassword(eMail, password);
    verifyEmail();
    console.log(eMail, password);

    const updatedUserInfo = {
      phone,
      password,
      displayName: name,
      photoURL: "",
      email: eMail,
    };
    // send user Info to database
    fetch(`https://etools-server.herokuapp.com/newUser/${eMail}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUserInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.info("Updated Done!", { theme: "colored" });
        // e.target.reset();
      });
  };

  if (loading || sendingEmailVerification) {
    return <Loading />;
  }
  if (user) {
    const email = user.email;
    console.log(user);
    // send updated user to database
    if (email !== null) {
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
    navigate("/");
  }
  return (
    <div>
      <div className=" min-h-screen bg-base-200 flex-col w-full flex items-center">
        <h1 className="text-4xl my-4">Create Account</h1>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-5/6 lg:w-2/6">
          <form onSubmit={handelForm} className="card-body pb-0">
            {/* Name Section  */}
            <div className="flex gap-1">
              <div className="form-control w-1/2">
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Email  */}
            <div className="form-control">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Phone  */}
            <div className="form-control">
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>

            <div className="flex gap-1">
              <div className="form-control w-full">
                <input
                  type="password"
                  placeholder="Password"
                  minLength={6}
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              {/* <div className="form-control w-1/2">
                <input
                  type="password"
                  placeholder="Conform Password"
                  name="conformpassword"
                  min={6}
                  className="input input-bordered"
                  required
                />
              </div> */}
            </div>
            <div className="form-control">
              <input
                type="file"
                placeholder="Photos"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already Account?
              </Link>
            </label>
            <div className="form-control mt-1">
              <p className=" text-error text-center mb-2">
                {error && error?.message}
              </p>
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
