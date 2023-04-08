


import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';

import axios from "axios";
import { toast } from "react-toastify";

function ApplyForm() {
  
  const [coins, setCoins] = useState([]);
  

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




const onFinish = (values) => {
  const postdata = values
  console.log('Success:', postdata);

  axios({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    url: 'https://feeds.stashack.cloud:3000/login',
    data: postdata,
  }).then(async function (response) {
    console.log(response);
    const res = await response.data;
    console.log('res')
    console.log(res)
    localStorage.setItem('userID',res.UserID)
      // window.location.href = '/active'
  }).catch((err) => {
    toast(err.response.data.message)
  })
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  return (
    <>
      
      <div className="mt-24">
      <Form
      className="w-full lg:w-1/4 mx-auto bg-white shadow-md shadow-second rounded px-8 pt-6 pb-8 mb-4 border-b-2 border-second"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

   

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className="bg-[#FE8067]" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </div>

    </>
  );
}

export default ApplyForm;

