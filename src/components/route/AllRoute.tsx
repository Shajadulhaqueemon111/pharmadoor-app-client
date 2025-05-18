import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import ErrorPage from "../Pages/Error/Error";
import HomePage from "../Pages/Home/Home";
import NapaMedicines from "../Pages/Medicines/Napa";
import SecloMedicines from "../Pages/Medicines/Seclo";
import MonusMedicines from "../Pages/Products/Monus";
import AltrolMedicines from "../Pages/Products/Altrol";
import StethoscopePage from "../Pages/Equipments/Stethoscope";
import ThermomiterPage from "../Pages/Equipments/Thermomiter";
import OnlineDoctors from "../Pages/OnlineDoctor/OnlineDoctors";
import NapaDetailsPage from "../Pages/Medicines/NapaDetailsPage";
import SeclodetailsPage from "../Pages/Medicines/SeclodetailsPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import OtciMedicineDetails from "../Pages/OtcMedicine/OticiMedicineDetails";
import AllMedicineDetails from "../Pages/OtcMedicine/AllMedicineDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/medicines/napa",
        element: <NapaMedicines />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/medicines/napaDetails/:id",
        element: <NapaDetailsPage />,
      },
      {
        path: "/medicines/seclo",
        element: <SecloMedicines />,
      },
      {
        path: "/medicines/secloDetails/:id",
        element: <SeclodetailsPage />,
      },
      {
        path: "/products/monas",
        element: <MonusMedicines />,
      },
      {
        path: "/products/alatrol",
        element: <AltrolMedicines />,
      },
      {
        path: "/equipments/stethoscope",
        element: <StethoscopePage />,
      },
      {
        path: "/equipments/thermometer",
        element: <ThermomiterPage />,
      },
      {
        path: "/online-doctor",
        element: <OnlineDoctors />,
      },
      {
        path: "otcimedicineDetails/:category",
        element: <OtciMedicineDetails />,
      },
      {
        path: "allmedicineDetails/:id",
        element: <AllMedicineDetails />,
      },
    ],
  },
]);

export default router;
