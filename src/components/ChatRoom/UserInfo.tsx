import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

type Props = {};

const UserInfo = (props: Props) => {
  const {
    user: { photoURL, displayName },
  } = useContext(AuthContext);
  return (
    <div className="">
      <div className="flex justify-between items-center p-3 flex-col sm:flex-row ">
        <div className="flex gap-2 items-center">
          <img
            src={photoURL ?? ""}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <h3 className="text-lg text-white">{displayName}</h3>
        </div>
        <div>
          <button className="button border-white text-white hover:text-black">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
