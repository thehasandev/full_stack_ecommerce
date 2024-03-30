import {UserOutlined ,SettingOutlined,DesktopOutlined,FundProjectionScreenOutlined} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

  function Sidevar() {
    const user = JSON.parse(localStorage.getItem("user")) 
    const navigate =useNavigate()
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
        getItem("Add Product", "/dashboard/createproduct"),
        getItem("View Product", "/dashboard/viewproduct"),
  
      ]),
  
      {
        type: "divider",
      },
  
      getItem("Category & SubCategory", "sub3", <FundProjectionScreenOutlined />, [
        getItem("Add Category", "/dashboard/createcategori"),
        getItem("View Catergory", "/dashboard/viewcategori"),
        getItem("Add Subcategory", "/dashboard/createsubcategori"),
        getItem("View Subcatergory", "/dashboard/viewsubcategori"),
      ]),
  
      getItem("Discount", "sub4", <SettingOutlined />, [
        getItem("Add Discount", "9"),
        getItem("View Discount", "10"),
  
      ]),
      
    ];
    const onClick = (e) => {
      navigate(e.key)
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
  
  export default Sidevar
  