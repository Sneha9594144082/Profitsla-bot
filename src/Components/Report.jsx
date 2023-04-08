import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import { Card } from "antd";

function ApplyForm() {
  const [userid, setUserid] = useState([]);
  


  const getallrole = (e) => {
    const formData = new FormData();

    formData.append("UserID", userid);
    axios
      .post("https://feeds.stashack.cloud:3000/report", formData)
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

  useEffect(() => {
    getallrole();
  }, []);

  return (
    <>
      <div className="mt-[3.5rem] lg:mt-[4rem] py-10">
        <div class="  grid grid-cols-3 gap-4">
          <div class="col-span-3 sm:col-span-2 md:col-span-1">
            {userid?.map((item) => (
              <Card class="w-full lg:w-2/4 mx-auto bg-white shadow-md shadow-second rounded px-8 pt-6 pb-8 mb-4 border-b-2 border-second">
                <div class="p-4" key={item}>
                  <h2 class="text-lg font-medium mb-2">Coin</h2>
                  <p class="text-gray-500">ID: {item.Coin}</p>
                  <p class="text-gray-500">Start Date: {item.StartDate}</p>
                  <p class="text-gray-500">Invested: {item.Invested}</p>
                  <p class="text-gray-500">Trade Type: {item.TradeType}</p>
                  <p class="text-gray-500">Balance: {item.Balance}</p>
                  <p class="text-gray-500">Profit($): {item.TotalProfit}</p>
                  <p class="text-gray-500">Brokerage: {item.TotalBrokerage}</p>
                  <p class="text-gray-500">Profile(%): {item.TotalProfit}</p>
                  <p class="text-gray-500">Total Trades: {item.TotalTrades}</p>
                  <p class="text-gray-500">
                    Winning Trades: {item.WinningTrades}
                  </p>
                  <p class="text-gray-500">
                    Losing Trades: {item.LosingTrades}
                  </p>
                  <p class="text-gray-500">Hit Rate: {item.HitRate}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyForm;
