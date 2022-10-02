import { AppContext } from "./Authcontext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { authState } = useContext(AppContext);

  if (!authState.isAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default PrivateRoute;
