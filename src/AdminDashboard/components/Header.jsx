import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarItem } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/userLogout";
import { readAllNavbarIcon } from "../../services/index/navbarPost";
import { useEffect, useState } from "react";


const DashboardHeader = () => {
  const [nav, setNav] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllNavbarIcon();
        //console.log(data)
        setNav(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
   const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
   // Logout handler dispatches the logout action
   const logoutHandler = () => {
   dispatch(logout());
  };
    return (
                        //<!-- ========== HEADER ========== -->
 <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64  ">
    <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
    {nav && nav?.map((i, index) => ( 
      <div  key={index}  className="me-5 lg:me-0 lg:hidden">
        <Link to="/"> <img src={i.image} className="max-w-[40px] max-h-[40pxpx]" alt="mind Space" title="Mind Space - Home"></img></Link>
      </div>
    ))}
      

      <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
        <div className="sm:hidden">
         
        </div>

          <h2></h2>
        <div className="flex flex-row items-center justify-end gap-2">
          

            {userState?.userInfo?
            ( <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform ring-cyan-600"
                size="sm"
              
              />
            </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold text-cyan-600">{userState?.userInfo.email}</p>           
                </DropdownItem>
                <DropdownItem> <Link to="/user-profile">My profile</Link> </DropdownItem>
                <DropdownItem   onClick={logoutHandler} key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>):(
              <NavbarItem>
              <Link to="/login" color="foreground" >
                Login
              </Link>
            </NavbarItem>
          )}
       
        </div>
      </div>
    </nav>
  </header>
//    <!-- ========== END HEADER ========== -->
    );
};

export default DashboardHeader;