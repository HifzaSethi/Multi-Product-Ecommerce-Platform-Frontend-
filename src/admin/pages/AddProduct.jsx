import { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  const API = import.meta.env.VITE_API_URL;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    try {
      // 1️⃣ Upload image
      const formData = new FormData();
      formData.append("image", file);

      const uploadRes = await axios.post(`${API}/api/upload`, formData, {
        withCredentials: true,
      });

      const imageUrl = uploadRes.data.imageUrl;

      // 2️⃣ Save product
      await axios.post(
        `${API}/api/admin/adminProduct`,
        {
          name,
          description,
          price: Number(price),
          categories,
          tags,
          images: [imageUrl],
        },
        { withCredentials: true }
      );

      alert("Product added successfully");
      // Reset form
      setName("");
      setDescription("");
      setPrice("");
      setCategories("");
      setTags("");
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Failed to add product. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-2">
          Add New Product
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter product details and upload an image
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />

          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none resize-none"
            rows={3}
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />

          <input
            placeholder="Category"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            min="0"
            max="5"
          />
          <input
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            min="0"
            max="5"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full text-gray-500 file:border file:border-gray-300 file:rounded-lg file:px-4 file:py-2 file:bg-purple-50 file:text-purple-600 hover:file:bg-purple-100 cursor-pointer"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-purple-700 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
