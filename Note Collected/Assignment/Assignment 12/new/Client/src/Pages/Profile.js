import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const Profile = () => {
  const imgStoreKey = "262e7d4ee7c68ebbd1d0f36491313d7a";
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    const email = user.email;
    fetch(`https://etools-server.herokuapp.com/userInfo/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }

  const handenEdit = () => {
    setIsEdit(true);
  };
  const sendUserInfoToDatabase = (userData) => {
    const email = user.email;
    // send user Info to database
    if (email !== null) {
      fetch(`https://etools-server.herokuapp.com/newUser/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.info("Profile Updated!", { theme: "colored" });
          // e.target.reset();
          setIsEdit(false);
        });
    }
  };
  const onSubmit = (data) => {
    console.log(data);

    // imgbb

    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=262e7d4ee7c68ebbd1d0f36491313d7a`;

    if (data?.photo[0]) {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.success) {
            console.log(result);
            const withImgbbData = {
              address: data.address,
              city: data.city,
              facebook: data.facebook,
              github: data.github,
              linkedin: data.linkedin,
              phone: data.phone,
              photoURL: result.data.url,
              twitter: data.twitter,
            };
            console.log(withImgbbData);
            sendUserInfoToDatabase(withImgbbData);
          }
        });
    }else{
      const withOutImgData = {...data, photoURL:user.photoURL}
      sendUserInfoToDatabase(withOutImgData);
    }
  };

  const saveForm = (e) => {};
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mt-5 bg-base-200 flex-col flex items-center"
      >
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-3/4 lg:w-2/3 justify-center items-center">
          <div className="flex items-center bg-[#4b6bfb45] w-full">
            <div className="avatar p-5 pr-0 w-1/4">
              {isEdit ? (
                <input
                  className="input input-bordered input-secondary w-full"
                  type="file"
                  name="photo"
                  {...register("photo", {})}
                />
              ) : (
                <div className=" w-36 mask mask-hexagon">
                  <img src={userInfo?.photoURL} alt={userInfo?.displayName} />
                </div>
              )}
            </div>
            {/* Name Section  */}
            <div>
              <h1 className="text-4xl font-bold">{userInfo?.displayName}</h1>
              <p>{userInfo?.email}</p>
            </div>
          </div>

          {/* Aditional Info  */}
          <div className="overflow-x-auto w-full">
            {/* <!-- row 1 --> */}
            <div className="w-full flex flex-row">
              <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                <div className="font-bold">Address</div>
                <div className="text-sm opacity-50">City</div>
              </div>
              <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                {isEdit ? (
                  <input
                    className="input input-bordered input-secondary w-full"
                    name="address"
                    defaultValue={userInfo?.address}
                    {...register("address", {
                      maxLength: 500,
                    })}
                  />
                ) : (
                  userInfo?.address
                )}
                <br />

                {isEdit ? (
                  <input
                    className="input input-bordered w-full mt-1"
                    defaultValue={userInfo?.city}
                    {...register("city", { maxLength: 500 })}
                  />
                ) : (
                  <span className="badge badge-ghost badge-sm">
                    {userInfo?.city}
                  </span>
                )}
              </div>
            </div>
            {/* <!-- row 2 --> */}
            <div className="w-full flex flex-row">
              <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                <div className="font-bold">Phone</div>
              </div>
              <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                {isEdit ? (
                  <input
                    type="tel"
                    className="input input-bordered input-secondary w-full"
                    defaultValue={userInfo?.phone}
                    {...register("phone", { maxLength: 15 })}
                  />
                ) : (
                  userInfo?.phone
                )}
              </div>
            </div>
            {/* <!-- row 2 --> */}
            <div className="w-full flex flex-row">
              <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                <div className="font-bold">Facebook</div>
              </div>
              <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                {isEdit ? (
                  <input
                    type="text"
                    className="input input-bordered input-secondary w-full"
                    defaultValue={userInfo?.facebook}
                    {...register("facebook", { maxLength: 250 })}
                  />
                ) : (
                  <a
                    href={userInfo?.facebook}
                    target="_blank"
                    className=" text-primary hover:underline"
                  >
                    {userInfo?.facebook}
                  </a>
                )}
              </div>
            </div>
            {/* <!-- row 2 --> */}
            <div className="w-full flex flex-row">
              <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                <div className="font-bold">GitHub</div>
              </div>
              <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                {isEdit ? (
                  <input
                    type="text"
                    className="input input-bordered input-secondary w-full"
                    defaultValue={userInfo?.github}
                    {...register("github", { maxLength: 250 })}
                  />
                ) : (
                  <a
                    href={userInfo?.github}
                    className=" text-primary hover:underline"
                    target="_blank"
                  >
                    {userInfo?.github}
                  </a>
                )}
              </div>
            </div>
            {/* <!-- row 2 --> */}
            <div className="w-full flex flex-row">
              <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                <div className="font-bold">Linkedin</div>
              </div>
              <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                {isEdit ? (
                  <input
                    type="text"
                    className="input input-bordered input-secondary w-full"
                    defaultValue={userInfo?.linkedin}
                    {...register("linkedin", { maxLength: 250 })}
                  />
                ) : (
                  <a
                    href={userInfo?.linkedin}
                    target="_blank"
                    className=" text-primary hover:underline"
                  >
                    {userInfo?.linkedin}
                  </a>
                )}
              </div>
            </div>
            {/* <!-- row 2 --> */}
            <div className="w-full flex flex-row">
              <div className=" px-5 lg:px-10 w-1/6 lg:w-2/12 py-5">
                <div className="font-bold">Twitter</div>
              </div>
              <div className=" px-10 py-5 w-5/6 lg:w-10/12">
                {isEdit ? (
                  <input
                    type="text"
                    className="input input-bordered input-secondary w-full"
                    defaultValue={userInfo?.twitter}
                    {...register("twitter", { maxLength: 250 })}
                  />
                ) : (
                  <a
                    href={userInfo?.twitter}
                    target="_blank"
                    className=" text-primary hover:underline"
                  >
                    {userInfo?.twitter}
                  </a>
                )}
              </div>
            </div>
            {/* <!-- row 2 --> */}
            <div className=" flex flex-row justify-evenly items-center px-5 lg:px-10 py-5">
              <button
                className="btn btn-primary"
                disabled={isEdit}
                onClick={handenEdit}
              >
                Edit
              </button>
              <input
                type="submit"
                className="btn btn-secondary"
                disabled={!isEdit}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
