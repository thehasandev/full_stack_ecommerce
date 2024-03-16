import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function ForgotPassword() {
   const param = useParams()
   const navigate = useNavigate()
  const onFinish = async (values) => {
    try{
      const response = await fetch("http://localhost:8000/api/v1/auth/changepassword",{
        method : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify({
          token : param.token,
          password : values.userpassword
        })
      })

      if(!response.ok){
        throw new Error("Could Not Fount Api")
      }
      const data = await response.json()
      navigate("/login")
      if(data.sucess){
        toast.success(data.sucess)
      }
      if(data.error){
        toast.error(data.error)
      }

      
      
    }catch(error){
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="registaition">
      <div className="from">
        <h1>New Password</h1>
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
            label="Password"
            name="userpassword"
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
              Reset Password
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
