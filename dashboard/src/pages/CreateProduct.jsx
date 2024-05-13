import axios from "axios";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastContainer, toast } from "react-toastify";
import slugify from "react-slugify";

function CreateProduct() {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [ragulerPrice, setRagulerPrice] = useState("");
  const [slug, setSlug] = useState("");
  

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
        salePrice: salePrice,
        ragulerPrice: ragulerPrice,
        avatar: image,
        discription: discription,
        slug: slug,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (datas.data.error) {
      toast.error(datas.data.error);
    } else if (datas.data.sucess) {
      toast.success(datas.data.sucess);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setSlug(slugify(e.target.value));
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
            onChange={handleNameChange}
            required
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

        <div style={{ marginBottom: "10px" }}>
          <label>Slug</label>
          <br />
          <input
            disabled
            type="text"
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
