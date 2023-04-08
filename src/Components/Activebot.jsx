import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

function ApplyForm() {
  const [apiname, setApiname] = useState('');	
  const [key, setKey] = useState("");	
  const [secret, setSecret] = useState("");	
  const [amount, setAmount] = useState("");	
  const [coins, setCoins] = useState([]);	
  const [order, setOrder] = useState("");	
  const [volume, setVolume] = useState("");	
  const [tp, setTp] = useState("");	
  const [disabled, setDisabled] = useState(false);	
  const [coinnn, setCoinnn] = useState('');	
  const [user, setUser] = useState(465)
  const [userid, setUserid] = useState([]);


  // const [id, setId] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // setDisabled(true);
    formData.append('api_name',apiname);	
    formData.append("api_key", key);	
    formData.append("api_secret", secret); 	
    formData.append("amount", amount);	
    formData.append("coin", coins);	
    formData.append("su_or_no", order);	
    formData.append("su_or_vol", volume);	
    formData.append("tp", tp);	
    formData.append("user", user);
    // formData.append("twitter", id);
    console.log(coins);

    axios
      .post("https://feeds.stashack.cloud:3000/livebot", formData)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.message === "Bot executed successfully!") {
          toast.success("Bot executed successfully!");
        }
      })
      .catch((err) => {
        if (err.message !== "") {
          toast.error("Something Went Wrong");
        }
      });
  };

  // async function getallrole() {
  //   try {
  //     const res = await axios.get("https://feeds.stashack.cloud:3000/listbot");
  //     setCoins(res.data.data);
      
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

   const getallrole = (e) => {
     const formData = new FormData();
     
     formData.append("UserID", userid);
       axios
         .post("https://feeds.stashack.cloud:3000/listbot", formData)
         .then((res) => {
          console.log(res.data.data);
          setUserid(res.data.data);
           if (res.data.message === " Created successfully") {
               toast.success(" Created successfully");
           }
         })
         .catch((err) => {
           if (err.message !== "") {
             //   toast.error("Something Went Wrong");
           }
         });
   };

   const getallcoin = (e) => {
    const formData = new FormData();
    
      axios
        .post("https://feeds.stashack.cloud:3000/get_coins")
        .then((res) => {
         console.log(res.data.data);
         setCoins(res.data.data);
          if (res.data.message === " Created successfully") {
              toast.success(" Created successfully");
          }
        })
        .catch((err) => {
          if (err.message !== "") {
            //   toast.error("Something Went Wrong");
          }
        });
  };

  

  useEffect(() => {
    getallrole();
    getallcoin();
  }, []);


  return (
    <>
      <div className=" mt-[3.5rem] lg:mt-[4rem] py-10  ">
        <h2 className="text-second text-center text-2xl md:text-3xl lg:text-5xl mb-5 lg:mt-0 font_primary ">
          Together at Profitsla
        </h2>
        <p className="text-base sm:text-xl font-serif py-2 text-main text-center mb-5 capitalize">
          Take your Profits to the next level with a few details.
        </p>

        <div className=" w-full lg:w-3/4 px-2 flex items-end justify-end">
          <a
            href="/order"
            className="container px-8 py-2 rounded-lg border-2 w-max cursor-pointer font_primary  hover:border-second font_secondary text-second hover:text-second bg-main hover:bg-[white] focus:outline-0 text-right"
          >
            Order Book
          </a>
        </div>

        <form
          className="w-full lg:w-3/4 mx-auto bg-white shadow-md shadow-second rounded px-8 pt-6 pb-8 mb-4 border-b-2 border-second"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row my-2 items-center">
            <div className="w-full lg:w-2/2 px-2 my-2">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor="mobile"
              >
                API Name
              </label>
              <input
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="name"
                type="text"
                placeholder="Enter your api name"
                value={apiname}
                onChange={(e) => setApiname(e.target.value)}
              />
            </div>
            <div className="w-full lg:w-2/2 px-2">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor="name"
              >
                API Key
              </label>
              <input
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="name"
                type="text"
                placeholder="Enter your api key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-2 items-center">
            <div className="w-full lg:w-2/2 px-2 my-2">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor="mobile"
              >
                API Secret
              </label>
              <input
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="name"
                type="text"
                placeholder="Enter your api secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
            </div>
            <div className="w-full lg:w-2/2 px-2">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor="email"
              >
                Amount
              </label>
              <input
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="email"
                type="number"
                placeholder="Enter your amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-2 items-center">
            <div className="w-full lg:w-2/2 px-2 my-2">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor="option"
              >
                Coins
              </label>
              <select
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="option"
                name="option"
                value={ coinnn }	
                onChange={ e => setCoinnn( e.target.value ) }
              >
                <option value="">--Select Coins--</option>

                {coins.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.Coin}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full lg:w-2/2 px-2">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor="email"
              >
                No. of Subsequent Order
              </label>
              <input
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="email"
                type="number"
                placeholder="Enter your subsequent order"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-2 items-center">
            <div className="w-full lg:w-2/2 px-2">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor="email"
              >
                Subsequent Order Volume
              </label>

              <input
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="email"
                type="number"
                placeholder="Enter your subsequent order volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
              />
            </div>
            <div className="w-full lg:w-2/2 px-2">
              <label
                className="block text-gray-700 font-bold mb-2 "
                htmlFor="email"
              >
                TP (%)
              </label>
              <input
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="email"
                type="number"
                placeholder="Enter your tp"
                value={tp}
                onChange={(e) => setTp(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full px-2 flex items-center justify-center">
            <input
              type="submit"
              className="px-8 py-2 rounded-lg border-2 w-max cursor-pointer font_primary  hover:border-second font_secondary text-second hover:text-second bg-main hover:bg-[white] focus:outline-0"
            />
          </div>
        </form>
      </div>

      <div className="">
        <div class="overflow-x-auto">
          <table class="w-full lg:w-3/4 mx-auto bg-white shadow-md shadow-second rounded px-8 pt-6 pb-8 mb-4 border-b-2 border-second">
            <thead className="bg-main text-second">
              <tr class="bg-gray-200 border-b border-gray-400">
                <th class="px-4 py-2 text-gray-600 font-bold">Date</th>
                <th class="px-4 py-2 text-gray-600 font-bold">API Name</th>
                <th class="px-4 py-2 text-gray-600 font-bold">API Key</th>
                <th class="px-4 py-2 text-gray-600 font-bold">API Secret</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Amount</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Coins</th>
                <th class="px-4 py-2 text-gray-600 font-bold">
                  {" "}
                  No.of Sub Order{" "}
                </th>
                <th class="px-4 py-2 text-gray-600 font-bold">
                  {" "}
                  Sub Order Volume{" "}
                </th>
                <th class="px-4 py-2 text-gray-600 font-bold">Tp</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {userid.map((item) => (
                <tr class="border-b border-gray-400" key={item}>
                 
                  <td class="px-4 py-2 text-gray-600 ">{item.DateTime}</td>
                  <td class="px-4 py-2 text-gray-600">{item.API_Name}</td>
                  <td class="px-4 py-2 text-gray-600">{item.API_KEY}</td>
                  <td class="px-4 py-2 text-gray-600">{item.API_SECRET}</td>
                  <td class="px-4 py-2 text-gray-600">{item.Amount}</td>
                  <td class="px-4 py-2 text-gray-600">{item.COIN}</td>
                  <td class="px-4 py-2 text-gray-600">
                    {item.SubsequentOrderCount}
                  </td>
                  <td class="px-4 py-2 text-gray-600">
                    {item.SubsequentOrderVolume}
                  </td>
                  <td class="px-4 py-2 text-right text-red-600 font-semibold">
                    {item.TakeProfit}
                  </td>
                  <td class="px-4 py-2 text-gray-600">{item.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ApplyForm;
