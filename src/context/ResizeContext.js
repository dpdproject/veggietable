import { createContext, useEffect, useState } from "react";

// create the context
const ResizeContext = createContext();

// create the provider
const ResizeContextProvider = ({ children }) => {
  const [sizeWindow, SetSizeWindow] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      SetSizeWindow({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <ResizeContext.Provider value={sizeWindow}>
      {children}
    </ResizeContext.Provider>
  );
};

export { ResizeContext, ResizeContextProvider };
