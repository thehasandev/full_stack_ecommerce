import axios from "axios";
import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from "react-toastify";
import slugify from "react-slugify";

function AddVarient() {
  const[allProduct,setAllProduct] =useState([])

  const [selectValue,setSelectValue] =useState("")
  const [varientName, setVarientName] = useState("");
  const [discription, setDiscription] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [ragulerPrice, setRagulerPrice] = useState("");


  const [image, setImage] = useState({});

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

useEffect(()=>{
  const productFetch = async()=>{
    const data =await axios.get("http://localhost:8000/api/v1/product/allproduct")
    setAllProduct(data.data);
  }
  productFetch()
},[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const datas = await axios.post(
      "http://localhost:8000/api/v1/product/addvarient",
      {
        productId: selectValue ,
        varientName: varientName,
        salePrice: salePrice,
        ragulerPrice: ragulerPrice,
        avatar: image,
        discription: discription,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
   if(datas.data.error){
    toast.error(datas.data.error)
   }else if(datas.data.sucess){
    toast.success(datas.data.sucess)
   }
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add Varient</h1>
       
        <div style={{ marginBottom: "10px" }}>
          <label>Select Product*</label>
          <br />
        <select value={selectValue} onChange={(e)=>{setSelectValue(e.target.value)}}  style={{width:"100%",padding: "4px"}}>
        <option value="">Select a product</option>
        {allProduct.map(product => (
          <option key={product._id} value={product._id}>
            {product.name}
          </option>
        ))}
        </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Varient Name*</label>
          <br />
          <input
            type="text"
            required
            onChange={(e)=>setVarientName(e.target.value)}
            style={{ width: "100%", padding: "4px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Regular Price*</label>
          <br />
          <input
            type="number"
            onChange={(e) => {
              setRagulerPrice(e.target.value);
            }}
            required
            style={{ width: "100%", padding: "4px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Sale Price*</label>
          <br />
          <input
            type="number"
            onChange={(e) => {
              setSalePrice(e.target.value);
            }}
            required
            style={{ width: "100%", padding: "4px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Image*</label>
          <br />
          <input
            type="file"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "4px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Discription*</label>
          <br />
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              setDiscription(editor.getData());
            }}
            style={{ width: "100%", padding: "4px", marginTop: "5px" }}
          />
        </div>

  
        <button type="submit">Submit</button>
      </form>

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
    </>
  );
}

export default AddVarient;
