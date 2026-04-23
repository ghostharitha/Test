import { useState } from "react";
import "./css/UserForm.css"
import axios from "axios";


const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const BASE_URL = import.meta.env.VITE_API_URL;
        console.log("Base url " , BASE_URL)
    
        const response = await axios.post(`${BASE_URL}/create`, formData);
        console.log(response.data);
        alert("User created successfully!");

        setFormData({
          name: "",
          email: "",
          address: "",
        });

    } catch (error) {
      console.error("Full error:", error);
      const errorMessage = error.response?.data?.error || error.message || "Error creating user";
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <div className="container">
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;