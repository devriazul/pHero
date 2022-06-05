import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useUserInfo = (email) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`https://etools-server.herokuapp.com/userInfo/${email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [userInfo]);
  return [userInfo, setUserInfo];
};

export default useUserInfo;
