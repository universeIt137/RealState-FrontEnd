import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { uploadImg } from "../../../uploadFile/uploadImg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DataTable from "./DataTable";

const ManageContent = () => {
    const axiosPublic = useAxiosPublic();



    const { data: allData = [], refetch } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/website-content');
            return res.data;
        }
    })




    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [contents, setContents] = useState([{ heading: '', short_des: '' }]);

    const handleImageChange = (e) => {
        setImages([...e.target.files]); // Set selected images
    };

    const handleContentChange = (index, field, value) => {
        const updatedContents = contents.map((content, i) =>
            i === index ? { ...content, [field]: value } : content
        );
        setContents(updatedContents);
    };

    const removeContent = (index) => {
        setContents(contents.filter((_, i) => i !== index));
    };

    const addContent = () => {
        setContents([...contents, { content_name: '' }]);
    };




    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        // Upload each image individually
        const imageUrls = await Promise.all(
            images.map(async (image) => await uploadImg(image))
        );




        const mission_desc = form.mission_desc.value;
        const vision_desc = form.vision_desc.value;
        const phone_number = form.phone_number.value;
        const facebook_url = form.facebook_url.value;
        const youtube_url = form.youtube_url.value;
        const linkedin_url = form.linkedin_url.value;
        const instagrame_url = form.instagrame_url.value;
        const twitter_url = form.twitter_url.value;
        const scheduleImage = form.scheduleImage.files[0];
        console.log(scheduleImage);


        let scheduleImageUrl = '';
        if (scheduleImage?.name) {
            
            scheduleImageUrl = await uploadImg(scheduleImage);
            
        }
        
        setLoading(true);

        // Simulate form submission
        try {
            const data = { mission_desc, vision_desc, scheduleImageUrl, phone_number, facebook_url, youtube_url, linkedin_url, instagrame_url, twitter_url, banner_images: imageUrls, core_values: contents }

            console.log(data);
            axiosPublic.post(`/website-content`, data)
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
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Manage Content</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Upload Website Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Mission Description</label>
                        <textarea rows={5} type="text" name="mission_desc" className="w-full px-4 py-2 border rounded-md" />
                    </div>


                    <div>
                        <label htmlFor="name">Vision Description</label>
                        <textarea rows={5} type="text" name="vision_desc" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className="">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" name="phone_number" className="w-full px-4 py-2 border rounded-md" />
                    </div>




                    <div>
                        <label htmlFor="">Facebook Url</label>
                        <input name="facebook_url" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Youtube Url</label>
                        <input name="youtube_url" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Linkedin Url</label>
                        <input type="text" name="linkedin_url" className="w-full px-4 py-2 border rounded-md" />
                    </div>


                    <div>
                        <label htmlFor="">Instagram Url</label>
                        <input type="text" name="instagrame_url" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Twitter Url</label>
                        <input type="text" name="twitter_url" className="w-full px-4 py-2 border rounded-md" />

                    </div>

                    {/* Multiple Image Upload */}
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label className="leading-7 text-sm text-gray-600 font-bold">Upload Multiple Banner Images</label><br />
                            <input
                                type="file"
                                name="images"
                                multiple // Allows selecting multiple images
                                onChange={handleImageChange}
                                className="file-input file-input-bordered file-input-md w-full"
                            />
                        </div>
                    </div>

                    {/* Feature content Section */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2 text-xl">Core Values</label>
                        {contents.map((content, index) => (
                            <div key={index} className="flex gap-4 mb-2">
                                <input
                                    type="text"
                                    value={content?.heading}
                                    onChange={(e) => handleContentChange(index, 'heading', e.target.value)}
                                    className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                    placeholder="Enter Heading"
                                    required
                                />

                                <input
                                    type="text"
                                    value={content?.short_des}
                                    onChange={(e) => handleContentChange(index, 'short_des', e.target.value)}
                                    className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                    placeholder="Enter Short description"
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

                    <div className=" w-full">
                        <div className="relative">
                            <p>Schedule Section Image</p>
                            <input type="file" name='scheduleImage' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>
                    </div>


                </div>

                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                    {loading ? "Uploading..." : "Submit"}
                </button>
            </form>

            <DataTable allData={allData} refetch={refetch}></DataTable>
        </div>
    );
};

export default ManageContent;
