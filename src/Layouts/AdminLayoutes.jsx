/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import DashboardSidebar from "../Pages/Admin/DasboardSidebar";

const AdminLayoute = ({title, description, keywords, author}) =>{
    return (
        <div className="font-Roboto ">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>

              <div className = "bg-[#E0E0E0] min-h-screen" >
            
 
        <div className="sticky top-0 inset-x-0 z-20  border-y px-4 sm:px-6 md:px-8 lg:hidden bg-[#E0E0E0]">
          <div className="flex items-center py-4">
            
            <button type="button" className="text-white0 hover:text-white" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
              <span className="sr-only">Toggle Navigation</span>
              <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          
            <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
              <li className="text-sm font-semibold  truncate  text-white" aria-current="page">
                Dashboard
              </li>
            </ol>

          </div>
        </div>
 
        <div id = "application-sidebar"
          className = "hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64  border-r  pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0  scrollbar-y bg-gray-200  border-gray-600" >
            <div className="px-6">
              <Link to='/' className="flex-none text-xl font-semibold  text-black"  aria-label="Brand">Insented</Link>
            </div>

                <DashboardSidebar></DashboardSidebar>
          </div>
  
          <div className="w-full pt-4 px-4 sm:px-6 md:px-8 lg:pl-72 bg-[#E0E0E0] min-h-screen">
              <Outlet></Outlet>
          </div>
  
        </div>
        </div>
    )
}

AdminLayoute.defaultProps = {
  title: "Insented - admin-dashboard",
  description: "FREGRENCE shop",
  keywords: "FREGRENCE",
  author: "Hasan Mt",
};

export default AdminLayoute;