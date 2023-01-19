import React from "react";
import RoomList from "./RoomList";
import UserInfo from "./UserInfo";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-screen bg-[#3f0e40] divide-y divide-gray-500">
      <div>
        <UserInfo />
      </div>
      <div>
        <RoomList />
      </div>
    </div>
  );
};

export default Sidebar;
