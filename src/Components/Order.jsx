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
        <div className=" w-full lg:w-3/4 px-2 flex items-end justify-end">
          <select
            className="p-2 rounded-lg mr-[1.5rem] border-[1px] border-main text-main bg-[white] focus:outline-0"
            id="option"
            name="option"
            typeof="button"
            required
          >
            <option value="">--Choose Coin--</option>

            {role.map((r) => (
              <option key={r.id} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>
          <a
            href="/report"
            className="container px-8 py-2 rounded-lg border-2 w-max cursor-pointer font_primary  hover:border-second font_secondary text-second hover:text-second bg-main hover:bg-[white] focus:outline-0 text-right"
          >
            Report
          </a>
        </div>

        <div class="overflow-x-auto mt-[1.5rem]">
          <table class="w-full lg:w-3/4 mx-auto bg-white shadow-md shadow-second rounded px-8 pt-6 pb-8 mb-4 border-b-2 border-second">
            <thead className="bg-main text-second">
              <tr class="bg-gray-200 border-b border-gray-400">
                <th class="px-4 py-2 text-gray-600 font-bold">Date</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Symbol</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Price</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Quantity</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Amount</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Side</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Order ID</th>
                <th class="px-4 py-2 text-gray-600 font-bold">
                  Commission Asset
                </th>
                <th class="px-4 py-2 text-gray-600 font-bold">Fees</th>
                <th class="px-4 py-2 text-gray-600 font-bold">Create</th>
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
