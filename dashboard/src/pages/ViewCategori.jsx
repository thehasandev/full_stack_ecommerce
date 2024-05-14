import { Space, Table } from "antd";
import { useState } from "react";
import axios from "axios";
function ViewCategori() {
  const [categori, setCategori] = useState([]);

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
          <button>Edit</button>
          <button onClick={() => handleDelete(_)}>Delete</button>
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
