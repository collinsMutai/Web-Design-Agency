import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  const [top, setTop] = useState(3190);
// let top;
  const pathName = location.pathname;
  console.log(location.pathname);
//   if (pathName === "/porfolio") {
//       setTop(100);
//     // top = "100px"
//     } 
    console.log(top);
  return <AppContext.Provider value={{pathName, top, setTop}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
