import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.useremail,
          password: values.userpassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Cound Not Feactch Api");
      }

      const data = await response.json();

      

      if (data.error) {
        toast.error(data.error);
      } else if (!data.isEmailverified) {
        toast.error("Please Verify Your Email");
      } else if (data.role == "user") {
        toast.error(
          "You don't permet go to Home page .You must will have admin or marcent"
        );
      } else {
        navigate("/home");
        localStorage.setItem("user",JSON.stringify(data))
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="registaition">
      <div className="from">
        <h1>Log In</h1>
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
              Log In
            </Button>
            <Link to="/forgot-password">
              <p> Forgot Password </p>
            </Link>
          </Form.Item>
        </Form>
      </div>
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
    </section>
  );
}

export default Login;
