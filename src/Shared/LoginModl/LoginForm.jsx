import { useState } from "react";
import { useAuth } from "../../context/auth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";


 const LoginForm = ({openTab}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

   const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    // Show overlay
    setShowOverlay(true);

    // Wait for 3 seconds before further action
    setTimeout(() => {
      // Your code to execute after 3 seconds
      console.log('3 seconds passed. Do something here.');

      // For example, hide overlay
      setShowOverlay(false);
    }, 3000);
  };
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://insented.vercel.app/auth/login", {
          email,
          password,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);

          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
          
     
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <section className="">
                      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
                        <div className="">

                          <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="mb-2">
                              <label  className="block text-sm font-medium "><span className="sr-only">Email address</span></label>
                              <input 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                type="email"
                                required
                                placeholder="Your Email"
                                className="py-3 px-4 block w-full border-black border-[1px]  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                            </div>
                            <div className="mb-2">
                              <label  className="block text-sm font-medium "><span className="sr-only">Email address</span></label>
                              <input 
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                type="password"
                                required
                                placeholder="Your password"
                                className="py-3 px-4 block w-full border-black border-[1px]  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                            </div>
                      

                            <h2 className="lg:text-md md:text-sm text-xs text-start font-Lore">New user? <span className="underline cursor-pointer text-[#b18353]" onClick={(e) => {
                                    e.preventDefault();
                                    openTab(2);
                                  }}>Register</span> for an account now.</h2>
                            <div className="flex justify-between items-center">
                              <button
                               type="submit"
                               data-hs-overlay="#hs-cookies"
                                onClick={handleButtonClick}

                              className="border md:text-sm text-xs shadow-sm text-gray-300  hover:shadow-lg  bg-black md:py-2 py-1 w-[50%]"
                            >sign in</button>
                          
                            </div>

                            
                          </form>
                        </div>
                      </div>
    </section>
  )
}
export default LoginForm