import { Space, Table } from "antd";
import { useState } from "react";
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
      data.map((item) => {
        arr.push({
          key: item._id,
          name: item.name,
        });
      });
      setCategori(arr);
    } catch (error) {
      console.log(error);
    }
  };
  datafetch();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
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
