import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
function CreateCategori() {
  const [name, setName] = useState("");
  const ownerId = useSelector((state) => state.activeuser.value.id);
  const [image, setImage] = useState({});

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/product/createcategory",
        {
          name: name,
          ownerId: ownerId,
          avatar: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.sucess) {
        toast(response.data.sucess);
      } else if (response.data.error) {
        toast(response.data.error);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <section className="createcategoris">
      <form onSubmit={handleSubmit}>
        <h1>Create Categori</h1>
        <div style={{ marginBottom: "10px" }}>
          <label>Name*</label>
          <br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
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
    </section>
  );
}

export default CreateCategori;
