import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


 const RegistrationForm = ({openTab}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://insented.vercel.app/auth/register", {
          name,
          email,
          password,
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          
        openTab(1)
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

                          <form onSubmit={handleSubmit}  className="space-y-3">
                             <div className="mb-2">
                              <label  className="block text-sm font-medium "><span className="sr-only">Email address</span></label>
                              <input type="text"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  required
                                  placeholder="Your name"
                                  className="py-3 px-4 block w-full border-black border-[1px]  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                            </div>
                            <div className="mb-2">
                              <label  className="block text-sm font-medium "><span className="sr-only">Email address</span></label>
                              <input 
                                 type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                  placeholder="Your Email"
                                  className="py-3 px-4 block w-full border-black border-[1px]  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                            </div>
                            <div className="mb-2">
                              <label  className="block text-sm font-medium "><span className="sr-only">Email address</span></label>
                              <input 
                                  type="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  id="exampleInputPassword1"
                                  required
                                  placeholder="Your Password"
                                  className="py-3 px-4 block w-full border-black border-[1px]  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                            </div>

                            <h2 className="lg:text-md md:text-sm text-xs text-start font-Lore">Already registered? Click here to <span title="login" className="underline cursor-pointer text-[#b18353]" 
                            onClick={(e) => {
                                    e.preventDefault();
                                    openTab(1);
                                  }}>log in.</span></h2>
                            <div className="flex justify-between items-center">
                            
                              <button
                              type="submit"
                              
                              data-toggle="tab"
                              href="#link1"
                              role="tablist"
                              className="border md:text-sm text-xs shadow-sm text-gray-300  hover:shadow-lg  bg-black md:py-2 py-1 w-[50%]"
                            >Register</button>
                          
                            </div>

                            
                          </form>
                        </div>
                      </div>
                    </section>
  )
}
export default RegistrationForm
