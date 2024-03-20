import axios from "axios";
import { toast } from "react-toastify";
import { Button, Form, Input } from "antd";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Registraition() {
  const navigate =useNavigate()
  const onFinish = async (values) => {
    const data = await axios.post(
      "http://localhost:8000/api/v1/auth/registration",
      {
        userName: values.username,
        userEmail: values.useremail,
        userPassword: values.userpassword,
      },
      {
        headers: {
          Authorization: "asdfwerewrewrew",
        },
      }
    );

   if(data.data.sucess){
    toast.success(data.data.sucess)
    navigate(`/otp-varification/${values.useremail}`)
   }
   if(data.data.error){
    toast.error(data.data.error)
   }

   console.log(data);
   
   
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="registaition">
      <div className="from">
        <h1>Sing Up</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 800,
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
                message: "Please input your username!",
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
                message: "Please input your userEmail!",
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
                message: "Please input your password!",
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
            <Button type="primary" style={{width:"100%"}} htmlType="submit">
              Sing Up
            </Button>
          </Form.Item>
        </Form>
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
      </div>
      
    </section>
  );
}

export default Registraition;
