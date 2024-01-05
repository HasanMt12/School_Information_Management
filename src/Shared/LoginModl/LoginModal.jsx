import { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const LoginModal = ({ onClose }) => {
  const [openTab, setOpenTab] = useState(1);
  
  return (
    
    <div className="p-4 sm:p-14 text-center overflow-y-auto ">
       <ul className="flex mb-0 list-none flex-wrap   flex-row bg-white" role="tablist">
              <li className="  last:mr-0 flex-auto text-center">
                 <a
                  className={
                   "text-xs underline uppercase px-5 py-3  block leading-normal " +
                    (openTab === 1 ? "text-white bg-black border-[1px] border-black" : "bg-transparent text-gray-500 border-[1px] border-black")
                  }
                onClick={(e) => {
                    e.preventDefault();
                  setOpenTab(1);
                 }}
                 data-toggle="tab"
                 href="#link1"
               role="tablist"
                >
                 LOGIN
                 </a>
              </li>
             <li className="  last:mr-0 flex-auto text-center">
                <a
                  className={
                     "text-xs underline uppercase px-5 py-3  block leading-normal " +
                    (openTab === 2 ? "text-white bg-black border-[1px] border-black" : "bg-transparent text-gray-500 border-[1px] border-black")
                  }
                 onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  REGISTER
                </a>
              </li>
            </ul>


            <div className="relative flex  flex-col min-w-0 break-words bg-white w-full mb-6  ">
              <div className="px-4 py-4  flex-auto">
                <div className="tab-content tab-space">

                  
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    {/* login Form */}
                   <LoginForm openTab={ setOpenTab}></LoginForm>
                  </div>

                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    {/* register Form */}
                    <RegistrationForm openTab={ setOpenTab} ></RegistrationForm>
                  </div>
                  
                </div>
              </div>
            </div>
    </div>
  )
}
export default LoginModal;
