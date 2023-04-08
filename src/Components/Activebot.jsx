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
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
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
                type="email"
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
              >
                <option value="">--Select Coins--</option>

                {coins.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name}
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
                type="email"
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
                type="email"
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
                TP
              </label>
              <input
                className="p-2 rounded-lg border-[1px] w-full border-main text-main bg-[white] focus:outline-0"
                id="email"
                type="email"
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
                  No.of Sub Order
                </th>
                <th class="px-4 py-2 text-gray-600 font-bold">
                  Sub Order Volume
                </th>
                <th class="px-4 py-2 text-gray-600 font-bold">Tp</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-400">
                <td class="px-4 py-2 text-gray-600 font-semibold">1</td>
                <td class="px-4 py-2 text-gray-600 ">2023-04-07</td>
                <td class="px-4 py-2 text-gray-600">Groceries</td>
                <td class="px-4 py-2 text-gray-600">Groceries</td>
                <td class="px-4 py-2 text-gray-600">Groceries</td>
                <td class="px-4 py-2 text-gray-600">Groceries</td>
                <td class="px-4 py-2 text-gray-600">Groceries</td>
                <td class="px-4 py-2 text-gray-600">Groceries</td>
                <td class="px-4 py-2 text-gray-600">Groceries</td>
                <td class="px-4 py-2 text-right text-red-600 font-semibold">
                  - $50.00
                </td>
              </tr>
              <tr class="border-b border-gray-400">
                <td class="px-4 py-2 text-gray-600 font-semibold">2</td>
                <td class="px-4 py-2 text-gray-600">2023-04-06</td>
                <td class="px-4 py-2 text-gray-600">Gas</td>
                <td class="px-4 py-2 text-right text-red-600 font-semibold">
                  - $30.00
                </td>
              </tr>
              <tr class="border-b border-gray-400">
                <td class="px-4 py-2 text-gray-600 font-semibold">3</td>
                <td class="px-4 py-2 text-gray-600">2023-04-05</td>
                <td class="px-4 py-2 text-gray-600">Paycheck</td>
                <td class="px-4 py-2 text-right text-green-600 font-semibold">
                  $1,000.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ApplyForm;
