import { Space, Table } from "antd";
import { useState } from "react";
function ViewSubCategori() {
  const [subCategori, setSubCategori] = useState([]);
  const datafetch = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/product/allsubcategory",
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
      setSubCategori(arr);
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
        dataSource={subCategori}
        style={{ width: "600px" }}
      />
      ;
    </div>
  );
}

export default ViewSubCategori;
