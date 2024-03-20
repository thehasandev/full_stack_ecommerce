import { Button, Form, Input } from "antd";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
function CreateCategori() {
  const ownerId = useSelector((state) => state.activeuser.value.id);

  const onFinish = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/product/createcategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.categori.toLowerCase(),
            ownerId: ownerId,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Could not fetch Api");
      }
      if(data.sucess){
        toast.success(data.sucess)
      }else if(data.error){
        toast.error(data.error)
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="createcategoris">
      <div className="from">
        <h1>Create Categori</h1>
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
            label="Categoris Name"
            name="categori"
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
              Create Categori
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

export default CreateCategori;
