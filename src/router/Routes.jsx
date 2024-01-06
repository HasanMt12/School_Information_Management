import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayouts";
import HomePage from "../ui/home/HomePage";
import RegisterPage from "../pages/AuthPages/register/RegisterPage";
import LoginPage from "../pages/AuthPages/register/LoginPage";
import About from "../pages/About";
import Authorities from "../pages/Authorities";
import Contact from "../pages/Contact";
import Academic from "../pages/Academic";
import AdminLayout from "../AdminDashboard/AdminLayout";
import DashboardHome from "../AdminDashboard/components/DashboardPages/DashboardHome";

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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/authorities",
        element: <Authorities></Authorities>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/academic",
        element: <Academic></Academic>,
      },
     
    ]
  },
  {
    path: '/dashboard',
    element: <AdminLayout></AdminLayout>,
    children: [
      {
      path: "/dashboard",
      element: <DashboardHome></DashboardHome>
      },
     
     
      
    ]
  },
  
]);

export default router;