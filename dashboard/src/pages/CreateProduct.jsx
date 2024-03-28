import axios from "axios";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from "react-toastify";

function CreateProduct() {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState({});
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const datas = await axios.post(
      "http://localhost:8000/api/v1/product/createproduct",
      {
        name: name,
        price: price,
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
        <h1>Create Product</h1>
        <div style={{ marginBottom: "10px" }}>
          <label>Name*</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            style={{ width: "100%", padding: "4px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Price*</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setPrice(e.target.value);
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

export default CreateProduct;
