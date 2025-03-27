import { Link, Outlet } from "react-router-dom";
import UserContextProvider from "../Context/UserContextProvider";
import Dashboard from "./Dashboard";
import Register from "./Register";

const App = () => {
  return (
    <UserContextProvider>
      <Outlet />
    </UserContextProvider>
  );
};

export default App;
