import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../authContext/authContext";
import { ReadContactList } from "../../FirebaseModules/ReadContactList";
import { GetCurrentUserInfo } from "../../FirebaseModules/GetCurrentUserInfo";
const UserDataContext = createContext({});
export const useUserData = () => useContext(UserDataContext);

export const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState({
    userName: "",
  });
  function executeContactList(user, setLoading) {
    try {
      ReadContactList(user.displayName);
    } catch (e) {
      console.log(e);
    }
  }
  function executeGetCurrentUserInfo(user, setLoading) {
    GetCurrentUserInfo(user, setUserInfo, setLoading);
  }

  return (
    <UserDataContext.Provider
      value={{
        userData,
        userInfo,
        setUserData,
        executeContactList,
        executeGetCurrentUserInfo,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
