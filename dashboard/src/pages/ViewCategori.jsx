import { Space, Table } from "antd";
import { useState } from "react";
import { Modal } from "antd";
import axios from "axios";
function ViewCategori() {
  const [categori, setCategori] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [findName, setFindName] = useState("");

  const handleEdit = (item) => {
    setOpen(true);
    setFindName(item.name);
    setName(item.name);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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

      data.map((item, index) => {
        arr.push({
          key: item._id,
          id: index + 1,
          name: item.name,
          image: item.image,
        });
      });
      setCategori(arr);
    } catch (error) {
      console.log(error);
    }
  };
  datafetch();

  const handleDelete = async (item) => {
    axios.delete("http://localhost:8000/api/v1/product/deletecategory", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        categoryName: item.name,
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/product/editcategory",
        {
          findName: findName,
          updateName: name,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const result = await response.json();
      console.log(result);
  
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (_) => <a>{_}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_) => (
        <Space size="middle">
          <img
            style={{ width: "100px" }}
            src={`http://localhost:8000${_}`}
            alt=""
          />
        </Space>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_) => (
        <Space size="middle">
          <button onClick={() => handleEdit(_)}>Edit</button>
          <button onClick={() => handleDelete(_)}>Delete</button>
          <>
            <Modal title="Edit Catergori" open={open} onCancel={handleCancel}>
              <form onSubmit={handleSubmit}>
                <h1>Create Categori</h1>
                <div style={{ marginBottom: "10px" }}>
                  <label>Name*</label>
                  <br />
                  <input
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ width: "100%", padding: "4px", marginTop: "5px" }}
                  />
                </div>

                <button type="submit">Submit</button>
              </form>
            </Modal>
          </>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={categori}
        style={{ width: "600px" }}
      />
      ;
    </div>
  );
}

export default ViewCategori;
