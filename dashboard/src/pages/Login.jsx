import { Button, Form, Input } from "antd";

function Login() {
    const onFinish = async (values) => {
      console.log(values);

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
                Sing Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>

  );
}

export default Login;
