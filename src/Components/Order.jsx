import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { Button, Space, Table, Tag } from 'antd';
import { Link } from "react-router-dom";



const columns = [
  {
    title: 'Date',
    dataIndex: 'DateTime',
    key: 'DateTime',
  },
  {
    title: 'API_Name',
    dataIndex: 'API_Name',
    key: 'API_Name',
  },
  {
    title: 'Coin',
    dataIndex: 'Coin',
    key: 'Coin',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
  },
  {
    title: 'Side',
    dataIndex: 'Side',
    key: 'Side',
  },
  {
    title: 'Quantity',
    dataIndex: 'Quantity',
    key: 'Quantity',
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Amount',
  },

  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
  },

  {
    title: 'OrderID',
    dataIndex: 'OrderID',
    key: 'OrderID',
  },
  {
    title: 'Commission',
    dataIndex: 'Commission',
    key: 'Commission',
  },
  {
    title: 'CommissionAsset',
    dataIndex: 'CommissionAsset',
    key: 'CommissionAsset',
  },
  {
    title: 'Fees',
    dataIndex: 'Fees',
    key: 'Fees',
  },
];







function ApplyForm() {
  // const [key, setKey] = useState("");
  // const [secret, setSecret] = useState("");
  // const [amount, setAmount] = useState("");
  // const [coins, setCoins] = useState([]);
  // const [order, setOrder] = useState("");
  // const [volume, setVolume] = useState("");
  // const [tp, setTp] = useState("");
  // const [role, setRole] = useState([]);

  // const [disabled, setDisabled] = useState(false);
  // // const [id, setId] = useState("");

  // const handleSubmit = (e) => {
  //   const formData = new FormData();
  //   e.preventDefault();
  //   // setDisabled(true);
  //   formData.append("key", key);
  //   formData.append("secret", secret);
  //   formData.append("email", amount);
  //   formData.append("role", coins);
  //   formData.append("linkedln", order);
  //   formData.append("facebook", volume);
  //   formData.append("twitter", tp);
  //   // formData.append("twitter", id);

  //   axios
  //     .post("https://api.earnestroi.com/api/resume", formData)
  //     .then((res) => {
  //       if (res.data.message === "Resume Created successfully") {
  //         //   toast.success("Resume Created successfully");
  //       }
  //     })
  //     .catch((err) => {
  //       if (err.message !== "") {
  //         //   toast.error("Something Went Wrong");
  //       }
  //     });
  // };

  // async function getallrole() {
  //   try {
  //     const res = await axios.get("https://api.earnestroi.com/api/rolejob");
  //     setCoins(res.data.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // useEffect(() => {
  //   getallrole();
  // }, []);

  // console.log(coins);

const [data,setdata]=useState([])
  let userID = localStorage.getItem('userID')
  console.log(localStorage.getItem('userID'))

  const getlivebot = () => {
    const postdata = { "UserID": userID }
    console.log('Success:', postdata);

    axios({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: 'https://feeds.stashack.cloud:3000/orderhistory',
      data: postdata,
    }).then(async function (response) {
      console.log(response);
      const res = await response.data.data;
      console.log('res')
      console.log(res)
      setdata(res)
    }).catch((err) => {
      toast(err.response.data.message)
    })
  }

  useEffect(() => {
    getlivebot()
  }, [])

  const dataSource = [];
  for (let i = 0; i < data; ++i) {
    dataSource.push({
      key: i,
      DateTime: data.DateTime,
      API_Name: data.API_Name,
      Coin: data.Coin,
      Price: data.Price,
      Side: data.Side,
      Quantity: data.Quantity,
      Amount: data.Amount,
      Status: data.Status,
      OrderID: data.OrderID,
      Commission: data.Commission,
      CommissionAsset: data.CommissionAsset,
      Fees: data.Fees
    })
  }



  return (
    <>
    <div className="mt-20">
      <div className="flex justify-center">
      <Link
            to="/report"
            className="container px-8 py-2 rounded-lg border-2 w-max cursor-pointer font_primary  hover:border-second font_secondary text-second hover:text-second bg-main hover:bg-[white] focus:outline-0 text-right"
          >
            Report
          </Link>
      </div>
   
      <div className="mt-5 mx-5">

        <Table columns={columns} size="small" dataSource={data} />
      </div>
    </div>
    
      {/* <div className="mt-[3.5rem] lg:mt-[4rem] py-10">
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
      </div> */}
    </>
  );
}

export default ApplyForm;
