import {
  UserOutlined ,
  SettingOutlined,
  DesktopOutlined,
  FundProjectionScreenOutlined
} from "@ant-design/icons";

import { Menu } from "antd";

function Home() {
  const user = JSON.parse(localStorage.getItem("user")) 
 
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    user.role == "admin" &&
    getItem("User", "sub1",<UserOutlined />,  [
      getItem("Merchent","1"),
      getItem("User","2"),
    ]),

    getItem("Product", "sub2", <DesktopOutlined />, [
      getItem("Add Product", "3"),
      getItem("View Product", "4"),

    ]),

    {
      type: "divider",
    },

    getItem("Category & SubCategory", "sub3", <FundProjectionScreenOutlined />, [
      getItem("Add Category", "5"),
      getItem("View Catergory", "6"),
      getItem("Add Subcategory", "7"),
      getItem("View Subcatergory", "8"),
    ]),

    getItem("Discount", "sub4", <SettingOutlined />, [
      getItem("Add Discount", "9"),
      getItem("View Discount", "10"),

    ]),
    
  ];
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
}

export default Home;
