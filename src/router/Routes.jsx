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
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CreatTeacher from "../AdminDashboard/components/DashboardPages/CreatTeacher";
import NavbarOption from "../AdminDashboard/components/DashboardPages/NavbarOption";
import Speech from "../pages/Speech";
import GoverningSpeech from "../AdminDashboard/components/DashboardPages/GoverningSpeech";
import Facilities from "../AdminDashboard/components/DashboardPages/Facilities";
import ResulRecord from "../AdminDashboard/components/DashboardPages/resulRecord";
import InsightCommunity from "../AdminDashboard/components/DashboardPages/insightCommunity";
import Notice from "../AdminDashboard/components/DashboardPages/Notice";
import SliderPost from "../AdminDashboard/components/DashboardPages/SliderPost";
import GalleryPost from "../AdminDashboard/components/DashboardPages/GalleryPost";
import AllGallery from "../pages/AllGallery";
import Headline from "../AdminDashboard/components/DashboardPages/Headline";
import ContactManage from "../AdminDashboard/components/DashboardPages/ContactManage";
import NewsLetter from "../AdminDashboard/components/DashboardPages/NewsLetter";
import Events from "../AdminDashboard/components/DashboardPages/EventsManage";
import VideoPost from "../AdminDashboard/components/DashboardPages/VideoPost";
import AllNotice from "../pages/AllNotice";
import DemoPdfShow from "../pages/DemoPdfShow";

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
      {
        path: "/speech",
        element: <Speech></Speech>,
      },
      {
        path: "/gallery",
        element: <AllGallery />,
      },
      {
        path: "/gallery",
        element: <AllGallery />,
      },
      
      {
        path: "/notice",
        element: <AllNotice />,
      },
      {
        path: "/demo-notice",
        element: <DemoPdfShow />,
      },
    ]
  },
  {
    path: '/dashboard',
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "/dashboard",
        element: <CreatTeacher></CreatTeacher>
      },
      {
          path: "/dashboard/header",
          element: <NavbarOption></NavbarOption>
      },
      {
          path: "/dashboard/speech",
          element: <GoverningSpeech></GoverningSpeech>
      },
        {
          path: "/dashboard/facilities",
          element: <Facilities></Facilities>
      },
      {
        path: "/dashboard/record",
        element: <ResulRecord></ResulRecord>
    },
    {
      path: "/dashboard/insight",
      element: <InsightCommunity></InsightCommunity>
  },
  {
    path: "/dashboard/notice",
    element: <Notice></Notice>
},
{
  path: "/dashboard/slider",
  element: <SliderPost></SliderPost>
},
{
  path: "/dashboard/gallery",
  element: <GalleryPost></GalleryPost>
},
   
{
  path: "/dashboard/headline",
  element: <Headline />,
},
{
  path: "/dashboard/contact",
  element: <ContactManage />,
},
{
  path: "/dashboard/users",
  element: <NewsLetter />,
},
{
  path: "/dashboard/event",
  element: <Events />,
},
{
  path: "/dashboard/video",
  element: <VideoPost />,
},
    
     
     
      
    ]
  },
  {
    path: '*',
    element: <ErrorPage />,
  },

]);

export default router;