import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const API = import.meta.env.VITE_API_URL;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [files, setFiles] = useState([null, null, null, null, null]); // 5 slots
  const [previews, setPreviews] = useState([null, null, null, null, null]); // 5 previews

  const handleFileChange = (index, file) => {
    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);

    // Generate preview
    const updatedPreviews = [...previews];
    updatedPreviews[index] = file ? URL.createObjectURL(file) : null;
    setPreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files[0]) {
      alert("Please select at least one image in the first field.");
      return;
    }

    try {
      // 1️⃣ Upload images
      const formData = new FormData();
      files.forEach((file) => {
        if (file) formData.append("images", file);
      });

      const uploadRes = await axios.post(`${API}/api/upload`, formData, {
        withCredentials: true,
      });

      const imageUrls = uploadRes.data.imageUrls;

      // 2️⃣ Save product
      await axios.post(
        `${API}/api/admin/adminProduct`,
        {
          name,
          description,
          price: Number(price),
          categories,
          tags,
          images: imageUrls,
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
      setFiles([null, null, null, null, null]);
      setPreviews([null, null, null, null, null]);
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
          Enter product details and upload images (first image is mandatory)
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
          />

          <input
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />

          {/* Image Inputs with Previews */}
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="flex flex-col items-start">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleFileChange(index, e.target.files[0] || null)
                }
                className="w-full text-gray-500 file:border file:border-gray-300 file:rounded-lg file:px-4 file:py-2 file:bg-purple-50 file:text-purple-600 hover:file:bg-purple-100 cursor-pointer"
                required={index === 0} // only first image is mandatory
              />
              {previews[index] && (
                <img
                  src={previews[index]}
                  alt={`Preview ${index + 1}`}
                  className="mt-2 w-32 h-32 object-cover rounded-lg border"
                />
              )}
            </div>
          ))}

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
