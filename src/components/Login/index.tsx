import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
type Props = {};

const facebookProvider = new FacebookAuthProvider();
const LoginPage = (props: Props) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithPopup(auth, facebookProvider);
  };
  auth.onAuthStateChanged((user) => {
    if (user) {
      navigate("/");
    }
  });
  return (
    <div className="h-screen w-screen flex justify-start flex-col items-center p-10">
      <h1 className="text-3xl font-bold">Chat application</h1>
      <div className="flex flex-col mt-4 w-full sm:w-[400px] space-y-3">
        <button className="button">Access by Google</button>
        <button className="button" onClick={handleLogin}>
          Access by Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
