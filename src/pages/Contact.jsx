import { useEffect, useState } from "react";
import { readAllContact } from "../services/index/contactPost";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    const [contactId, setContactId] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllContact();
        //    console.log(data)
            setContactId(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);

      useEffect(function () {
        Aos.init({ duration: 500 });
      }, []);
    return (
        <section className="bg-blue-50 " id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 data-aos="fade-up"  className="text-gray-900 md:w-[25%] w-[50%] mx-auto border-x-4 pl-2 border-[#1eb2a6] lg:text-2xl md:text-xl text-lg font-semibold lg:my-7 md:my-5 my-3">
              Get in Touch
              </h2>
            </div>
        </div>
        <div className="">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:px-20 md:px-12 px-6">
                <div className="h-full pr-6">
                    <p className="mt-3 mb-12 text-lg text-gray-600 ">
                    We're Always Eager to <span className="text-[#1EB2A6]">Hear From You!</span>
                    </p>
                    {contactId && contactId?.map((i, index) => ( 
                        <ul key={index} className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#1EB2A6] text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Our Address
                                </h3>
                                <p className="text-gray-600 ">{i.address}</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#1EB2A6] text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Contact
                                </h3>
                                <p className="text-gray-600 ">Mobile: {i.number}</p>
                                <p className="text-gray-600 ">Mail: {i.email}</p>
                            </div>
                        </li>
                      
                    </ul> 
                     ))}
                   
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-4" id="form">
                    <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                    <form id="contactForm">
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="name"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label for="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-[#1EB2A6] text-white hover:text-[#1EB2A6] hover:bg-white hover:border-x hover:border-[#1EB2A6] px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    
    )
  }
  
  export default Contact
  