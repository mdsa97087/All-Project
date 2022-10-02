import React, { useState } from "react";

export const AppContext = React.createContext();

function Authcontext({ children }) {
      const [state, setState] = useState({
            isAuth: false,
      });

      const loginUser = (token) => {
            setState({
                  ...state,
                  isAuth: true,
            });
      };
      const logoutUser = () => {
            setState({
                  ...state,
                  isAuth: false,
            });
      };

      return (
            <AppContext.Provider value={{ authState: state, loginUser, logoutUser }}>
                  {children}
            </AppContext.Provider>
      );
}

export default Authcontext;
