import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayouts";
import HomePage from "../ui/home/HomePage";
import RegisterPage from "../pages/AuthPages/register/RegisterPage";
import LoginPage from "../pages/AuthPages/register/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
     
    ]
  },
  
]);

export default router;