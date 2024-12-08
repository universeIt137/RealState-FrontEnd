import React, { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const CreatePlotInfo = () => {
  const [contents, setContents] = useState([
    { content_name: "", price_5: "", price_7: "", price_10: "" },
  ]);
  const [blockCategory, setBlockCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();


  const { data: allData = [], refetch } = useQuery({
    queryKey: ['allData'],
    queryFn: async () => {
      const res = await axiosPublic.get('/plot-category');
      return res.data;
    }
  })


  const handleContentChange = (index, field, value) => {
    const updatedContents = contents.map((content, i) =>
      i === index ? { ...content, [field]: value } : content
    );
    setContents(updatedContents);
  };

  const addContent = () => {
    setContents([
      ...contents,
      { content_name: "", price_5: "", price_7: "", price_10: "" },
    ]);
  };

  const removeContent = (index) => {
    setContents(contents.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const packageData = {
      blockCategory,
      contents,
    };

    console.log(packageData);
    // Simulate form submission
    try {

      axiosPublic.post(`/project-price`, packageData)
        .then(res => {
          if (res) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Data has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })

    } catch (error) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto bg-white p-6 shadow-lg rounded-lg">
      <Helmet>
        <title>Dashboard | Add Plot Price</title>
      </Helmet>

      <h2 className="text-2xl font-bold text-center mb-6">Create Plot List Price</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 text-xl">
            Block Category
          </label>
          <select
            className="select select-primary w-full max-w-xs"
            value={blockCategory}
            onChange={(e) => setBlockCategory(e.target.value)}
            required
          >
            <option disabled value="">
              Select Block Category
            </option>
            {
              allData?.map(content => <option key={content?._id} value={content?.category}>{content?.category}</option>)
            }


          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2 text-xl">
            Feature Content
          </label>
          {contents.map((content, index) => (
            <div key={index} className="grid lg:grid-cols-5 gap-4 mb-2">
              <input
                type="text"
                value={content.content_name}
                onChange={(e) =>
                  handleContentChange(index, "content_name", e.target.value)
                }
                className=" p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                placeholder="Enter Plot Name"
                required
              />
              <input
                type="text"
                value={content.price_5}
                onChange={(e) =>
                  handleContentChange(index, "price_5", e.target.value)
                }
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                placeholder="Price for 5 years"
                required
              />
              <input
                type="text"
                value={content.price_7}
                onChange={(e) =>
                  handleContentChange(index, "price_7", e.target.value)
                }
                className=" p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                placeholder="Price for 7 years"
                required
              />
              <input
                type="text"
                value={content.price_10}
                onChange={(e) =>
                  handleContentChange(index, "price_10", e.target.value)
                }
                className=" p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                placeholder="Price for 10 years"
                required
              />
              {contents.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeContent(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addContent}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Content
          </button>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`mt-4 bg-green text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlotInfo;
