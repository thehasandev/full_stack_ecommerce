import React from 'react';

import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const onFinish = async (values) => {
    const data = await axios.post("http://localhost:8000/api/v1/auth/registration", {
      userName: values.username,
      userEmail: values.useremail,
      userPassword: values.userpassword
    }
      ,
      {
        headers: {
          Authorization: "asdfwerewrewrew"
        }
      }
    )
    if (data.data == "Registration Sucessfull") {
      toast.success(data.data)
    } else if (data.data == "This email is already used") {
      toast.error(data.data)
    }

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Form
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="UserEmail"
          name="useremail"
          rules={[
            {
              required: true,
              message: 'Please input your userEmail!',
            },

          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="userpassword"
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
          <Button type="primary" htmlType="submit">
            Sing Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App