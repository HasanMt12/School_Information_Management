/* eslint-disable react/prop-types */
import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar/Navbar";


const MainLayout = ({title, description, keywords, author}) => {
    const location = useLocation();
    const noFooter = location.pathname.includes('login') || location.pathname.includes('demo-notice') ;
    const noHeader = location.pathname.includes('demo-notice') || location.pathname.includes('login') ;
    return (
        
        <div className="font-Roboto bg-white">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
           
           {noHeader || <Navbar /> } 
                <Outlet/>
            
           {noFooter || <Footer /> }

        </div>
    )
}

MainLayout.defaultProps = {
  title: "school website",
  description: "school website",
  keywords: "school website",
  author: "Hasan Mt",
};

export default MainLayout;