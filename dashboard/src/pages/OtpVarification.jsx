import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function OtpVarification() {
  const peram = useParams()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log(values.otp);
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/auth/otpverification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: peram.email,
            otp: values.otp,
          }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("could Not data");
      }

      if (data.error) {
        toast.error(data.error);
      }
      if(data.sucess){
        toast.success(data.sucess)
        navigate("/login")
       }

    } catch (error) {
      console.log("error", error);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="registaition">
      <div className="from">
        <h1>Otp Varification</h1>
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
            label="Otp"
            name="otp"
            rules={[
              {
                required: true,
                message: "Please input your Otp!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Check
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

export default OtpVarification;
