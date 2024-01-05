/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar/Navbar";


const MainLayout = ({title, description, keywords, author}) =>{
  

    return (
        <div className="font-Roboto bg-white">
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
           
           <Navbar /> 
           <Outlet/>
           <Footer /> 

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