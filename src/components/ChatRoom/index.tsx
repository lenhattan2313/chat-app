import React from "react";
import Sidebar from "./Sidebar";
import Window from "./Window";

type Props = {};

const ChatRoomPage = (props: Props) => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <Window />
      </div>
    </div>
  );
};

export default ChatRoomPage;
