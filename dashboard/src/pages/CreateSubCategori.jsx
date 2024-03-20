import { Button, Form, Input } from "antd";
import { Select } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
function CreateSubCategori() {
  const [categori, setCategori] = useState([]);
  const [categoriId, setCategoriId] = useState("");
  const ownerId = useSelector((state) => state.activeuser.value.id);
  useEffect(() => {
    const datafetch = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/product/allcategory",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Could not fetch Api");
        }
        const arr = [];
        const data = await response.json();
        data.map((item) => {
          arr.push({
            value: item._id,
            label: item.name,
          });
        });
        setCategori(arr);
      } catch (error) {
        console.log(error);
      }
    };
    datafetch();
  }, []);

  const onFinish = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/product/createsubcategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.categori,
            ownerId: ownerId,
            categoriId: categoriId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Could Not fetch Api");
      }
      const data = await response.json();

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
    <div>
      <section className="createcategoris">
        <div className="from">
          <h1>Create Categori</h1>
          <Select
            showSearch
            style={{
              width: 365,
              marginLeft: "185px",
              marginBottom: "20px",
            }}
            placeholder="Search to Select Categoris"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={categori}
            onChange={(e) => setCategoriId(e)}
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
              maxWidth: 800,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Sub Categori Name" name="categori">
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Create Sub Categori
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
    </div>
  );
}

export default CreateSubCategori;
