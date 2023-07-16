import { useState } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setStatus("pending");
  //     try {
  //       const response = await axios.post("/api/contact", {
  //         name,
  //         email,
  //         message,
  //       });
  //       if (response.status === 200) {
  //         setStatus("success");
  //       } else {
  //         setStatus("error");
  //       }
  //     } catch (error) {
  //       setStatus("error");
  //     }
  //   };

  return (
    <div className="h-[80vh] rounded-[20px]">
      <div className="flex relative p-2">
        <div className="text-[25px] font-semibold text-[#000000] flex gap-2">
          <div className="text-[#F15A24]">Careerify</div>
          <div className="flex items-center">
            <IoIosArrowForward />
          </div>{" "}
          <div>Contact</div>
        </div>
        {/* <div className="justify-end absolute right-10">
          <form className="bg-[#e5e5e5] flex items-center rounded-[20px] w-[300px] h-[40px]">
            <input
              className="bg-[#e5e5e5] rounded-[20px] outline-none w-[250px] h-[30px] placeholder:text-[20px] placeholder:text-[#6a6a6a] pl-6 text-[25px] text-[#000000]"
              placeholder="Search..."
            />
            <button className="rounded-[20px] flex justify-center text-[#6a6a6a] text-[30px] px-2">
              <BiSearch />
            </button>
          </form>
        </div> */}
      </div>
      <div className="overflow-y-auto h-[70vh]">
        <div className="max-w-xl mx-auto h-[700px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="md:grid ">
              <div className="mt-5 h-[700px] ">
                <form
                //   onSubmit={handleSubmit}
                >
                  <div className="grid shadow sm:rounded-[20px] h-[600px] sm:overflow-hidden bg-white">
                    <div className="px-4 py-5  sm:p-6">
                      <div className="grid gap-6">
                        <div className="">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            //   value={name}
                            //   onChange={(e) => setName(e.target.value)}
                            className="mt-1 focus:ring-[#EB5831] focus:border-[#EB5831] h-[40px] bg-[#e6e6e6] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            //   value={email}
                            //   onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 focus:ring-[#EB5831] focus:border-[#EB5831] h-[40px] bg-[#e6e6e6] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>

                        <div className="">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Message
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              name="message"
                              rows="3"
                              // value={message}
                              // onChange={(e) => setMessage(e.target.value)}
                              className="shadow-sm focus:ring-[#EB5831] focus:border-[#EB5831] mt-1 bg-[#e6e6e6] block w-full sm:text-sm border-gray-300 rounded-md"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      {/* {status === "success" && ( */}
                      <p className="text-[#EB5831] pb-5 font-medium">
                        Thank you for your message! We will get back to you
                        soon.
                      </p>
                      {/* )} */}
                      {status === "error" && (
                        <p className="text-red-500 font-medium">
                          Oops! Something went wrong. Please try again later.
                        </p>
                      )}
                      {/* {status === "pending" ? (
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#EB5831] hover:bg-[#EB5831] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EB5831] disabled:opacity-50"
                        disabled
                      >
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016 12H2c0 2.761 1.343 5.23 3.404 6.709l-.07-1.418A6.008 6.008 0 003 12c0-3.309 2.691-6 6-6a5.993 5.993 0 005.435 3.559l1.415-.002A7.969 7.969 0 0112 20a7.937 7.937 0 01-5.657-2.342z"
                          ></path>
                        </svg>
                        Submitting
                      </button>
                    ) : ( */}
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#EB5831] hover:bg-[#EB5831] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EB5831]"
                      >
                        Submit
                      </button>
                      {/* )} */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
