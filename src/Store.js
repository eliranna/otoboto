import React, {useState} from "react";

const storeContext = React.createContext({});

const StoreProvider = ({ children }) => {
  const [userMenuOpened, openUserMenu] = useState(false);
  const [isLoginModalOpen, openLoginModal] = useState(false);

  return (
    <storeContext.Provider value={{ userMenuOpened, isLoginModalOpen, openUserMenu, openLoginModal }}>
      {children}
    </storeContext.Provider>
  );
};

const useStore = () => {
  const { userMenuOpened, openUserMenu, isLoginModalOpen, openLoginModal } = React.useContext(storeContext);
  return { userMenuOpened, openUserMenu, isLoginModalOpen, openLoginModal };
};

export {StoreProvider, useStore}