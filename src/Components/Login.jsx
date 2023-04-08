


import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

function ApplyForm() {
  
  const [coins, setCoins] = useState([]);
  
  // const [id, setId] = useState("");

//   const handleSubmit = (e) => {
//     const formData = new FormData();
//     e.preventDefault();
//     // setDisabled(true);
//     
//     formData.append("twitter", tp);
//     // formData.append("twitter", id);

//     axios
//       .post("https://api.earnestroi.com/api/resume", formData)
//       .then((res) => {
//         if (res.data.message === "Resume Created successfully") {
//           //   toast.success("Resume Created successfully");
//         }
//       })
//       .catch((err) => {
//         if (err.message !== "") {
//           //   toast.error("Something Went Wrong");
//         }
//       });
//   };

//   async function getallrole() {
//     try {
//       const res = await axios.get("https://api.earnestroi.com/api/rolejob");
//       setCoins(res.data.data);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   useEffect(() => {
//     getallrole();
//   }, []);

  console.log(coins);

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <form className="w-full lg:w-1/4 mx-auto bg-white shadow-md shadow-second rounded px-8 pt-6 pb-8 mb-4 border-b-2 border-second">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="px-8 py-2 rounded-lg border-2 w-max cursor-pointer font_primary  hover:border-second font_secondary text-second hover:text-second bg-main hover:bg-[white] focus:outline-0 text-center">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default ApplyForm;

