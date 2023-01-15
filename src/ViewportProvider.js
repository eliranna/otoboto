import React from "react";
import { breakpoints } from "./ob-style"

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  const isDesktop = () => width >= breakpoints.desktop;
  const isTablet = () => !isDesktop() && width >= breakpoints.tablet;
  const isMobile = () => !isDesktop() && !isTablet();
  return { isDesktop, isTablet, isMobile };
};

export {ViewportProvider, useViewport}