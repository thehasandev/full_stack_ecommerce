import { Button, Form, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
function ForgotPassword() {
  const onFinish = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/auth/forgotpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.useremail,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Api is not found`);
      }
      const data = await response.json();
     
      if(data.error){
        toast.error(data.error)
      }
      if(data.sucess){
        toast.success(data.sucess)
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="registaition">
      <div className="from">
        <h1>Forgot</h1>
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Find Email
            </Button>
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

export default ForgotPassword;
