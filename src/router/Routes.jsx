import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayouts";
import HomePage from "../ui/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
     
    ]
  },
  
]);

export default router;