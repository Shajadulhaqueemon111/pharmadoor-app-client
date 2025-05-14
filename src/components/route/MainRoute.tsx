import { Outlet } from "react-router-dom";
import FirstNavbar from "../Pages/Navbar/FirstNavbar";

const MainRoute = () => {
  return (
    <div>
      <FirstNavbar />
      <Outlet></Outlet>
    </div>
  );
};

export default MainRoute;
