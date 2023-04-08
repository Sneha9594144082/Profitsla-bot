import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

function ApplyForm() {
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");
  const [amount, setAmount] = useState("");
  const [coins, setCoins] = useState([]);
  const [order, setOrder] = useState("");
  const [volume, setVolume] = useState("");
  const [tp, setTp] = useState("");
  const [role, setRole] = useState([]);

  const [disabled, setDisabled] = useState(false);
  // const [id, setId] = useState("");

  const handleSubmit = (e) => {
    const formData = new FormData();
    e.preventDefault();
    // setDisabled(true);
    formData.append("key", key);
    formData.append("secret", secret);
    formData.append("email", amount);
    formData.append("role", coins);
    formData.append("linkedln", order);
    formData.append("facebook", volume);
    formData.append("twitter", tp);
    // formData.append("twitter", id);

    axios
      .post("https://api.earnestroi.com/api/resume", formData)
      .then((res) => {
        if (res.data.message === "Resume Created successfully") {
          //   toast.success("Resume Created successfully");
        }
      })
      .catch((err) => {
        if (err.message !== "") {
          //   toast.error("Something Went Wrong");
        }
      });
  };

  async function getallrole() {
    try {
      const res = await axios.get("https://api.earnestroi.com/api/rolejob");
      setCoins(res.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getallrole();
  }, []);

  console.log(coins);

  return (
    <>
      <div className="mt-[3.5rem] lg:mt-[4rem] py-10">
        <div class="  grid grid-cols-3 gap-4">
          <div class="col-span-3 sm:col-span-2 md:col-span-1">
            <div class="w-full lg:w-2/4 mx-auto bg-white shadow-md shadow-second rounded px-8 pt-6 pb-8 mb-4 border-b-2 border-second">
              <div class="p-4">
                <h2 class="text-lg font-medium mb-2">Coin</h2>
                <p class="text-gray-500">ID: </p>
                <p class="text-gray-500">Start Date: </p>
                <p class="text-gray-500">Invested: </p>
                <p class="text-gray-500">Trade Type: </p>
                <p class="text-gray-500">Balance: </p>
                <p class="text-gray-500">Profit($): </p>
                <p class="text-gray-500">Brokerage: </p>
                <p class="text-gray-500">Profile(%): </p>
                <p class="text-gray-500">Total Trades</p>
                <p class="text-gray-500">Winning Trades: </p>
                <p class="text-gray-500">Losing Trades: </p>
                <p class="text-gray-500">Hit Rate: </p>
              </div>
            </div>
          </div>
          
           
          
        </div>
      </div>
    </>
  );
}

export default ApplyForm;
