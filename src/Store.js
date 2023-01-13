import React, {useState} from "react";

const storeContext = React.createContext({});

const StoreProvider = ({ children }) => {
  const [userMenuOpened, openUserMenu] = useState(false);

  //const handleWindowResize = () => {
  //  setWidth(window.innerWidth);
  //  setHeight(window.innerHeight);
  //};

  //React.useEffect(() => {
  //  window.addEventListener("resize", handleWindowResize);
  //  return () => window.removeEventListener("resize", handleWindowResize);
  //}, []);

  return (
    <storeContext.Provider value={{ userMenuOpened, openUserMenu }}>
      {children}
    </storeContext.Provider>
  );
};

const useStore = () => {
  const { userMenuOpened, openUserMenu } = React.useContext(storeContext);
  return { userMenuOpened, openUserMenu };
};

export {StoreProvider, useStore}