import axios from "axios";
import { toast } from "react-toastify";
import { Button, Form, Input } from "antd";
import { ToastContainer } from "react-toastify";

function Registraition() {
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
    console.log(data);
    if (data.data.error == "Registration Sucessfull") {
      toast.success(data.data.error);
    } else if (data.data.error == "This email is already used") {
      toast.error(data.data.error);
    } else if (data.data.error == "Password have must 1 to 6") {
      toast.error(data.data.error);
    } else if (data.data.error == "Please enter a valid email") {
      toast.error(data.data.error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="registaition">
      <div className="from">
        <h1>Registraition</h1>
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
            <Button type="primary" htmlType="submit">
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
