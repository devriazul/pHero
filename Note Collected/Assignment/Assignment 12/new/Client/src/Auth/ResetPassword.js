import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const ResetPassword = () => {

  const [sendPasswordResetEmail, sending, passwordResetError] =
  useSendPasswordResetEmail(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
      console.log(data.email);
      await sendPasswordResetEmail(data.email);
      toast.info("Reset email send successfully!",{theme: "colored"});
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-10">
      <h1>Reset Your Password</h1>
        <input
        placeholder="Email"
          {...register("email", { required: true })}
          className="input input-primary"
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default ResetPassword;
