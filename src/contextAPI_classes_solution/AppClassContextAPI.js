import React from "react";
import FriendsContextProvider from "./context/FriendsContext";
import ContainerClass from "./ContainerClass";
function AppClassContextAPI() {
  return (
    <FriendsContextProvider>
      <ContainerClass />
    </FriendsContextProvider>
  );
}

export default AppClassContextAPI;
