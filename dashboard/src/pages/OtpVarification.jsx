
import { Button, Form, Input } from "antd";


function OtpVarification() {
  const onFinish = async (values) => {
    console.log(values);
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Otp"
            name="Otp"
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
              Sing Up
            </Button>
          </Form.Item>
        </Form>
        
      </div>
    </section>
  );
}

export default OtpVarification;