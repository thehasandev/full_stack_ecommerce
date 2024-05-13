import { Space, Table } from "antd";
import { useEffect, useState } from "react";

function ViewProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/product/allproduct",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Could not fetch Api");
        }
        const data = await response.json();
        const demoArray = [];
        data.map((item,index) => {
          demoArray.push({
            key: item._id,
            Serial: index+1,
            ProductName: item.name,
            Image: item.image,
            ProductDiscription: item.discription,
            RegulerPrice: item.ragulerPrice,
            slug: item.slug,
            SalePrice: item.salePrice,
          });
        });
        setProduct(demoArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);



  const columns = [
    {
      title: "Serial",
      dataIndex: "Serial",
      key: "Serial",
    },
    {
      title: "Product Name",
      dataIndex: "ProductName",
      key: "ProductName",
    },
    {
      title: "Image",
      dataIndex: "Image",
      key: "Image",
      render: (_) => (
        <Space size="middle">
         <img style={{width: "100px"}} src={`http://localhost:8000${_}`} alt="" />
        </Space>
      ),
    },
    {
      title: "Product Discription",
      dataIndex: "ProductDiscription",
      key: "ProductDiscription",
    },
    {
      title: "Reguler Price",
      dataIndex: "RegulerPrice",
      key: "RegulerPrice",
    },
    {
      title: "Sale Price",
      dataIndex: "SalePrice",
      key: "SalePrice",
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={product} columns={columns} bordered={true} />
    </div>
  );
}

export default ViewProduct;
