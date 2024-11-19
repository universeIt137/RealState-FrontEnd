import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { uploadImg } from "../../../uploadFile/uploadImg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DataTable from "./DataTable";
import { useParams } from "react-router-dom";

const UpdateContent = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const { data: singleData = {}, refetch } = useQuery({
        queryKey: ['singleData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/website-content/${id}`);
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
        const missionDesc = form.mission_desc.value;
        const visionDesc = form.vision_desc.value;
        const phoneNumber = form.phone_number.value;
        const facebookUrl = form.facebook_url.value;
        const youtubeUrl = form.youtube_url.value;
        const linkedinUrl = form.linkedin_url.value;
        const instagramUrl = form.instagrame_url.value;
        const twitterUrl = form.twitter_url.value;
        const scheduleImage = form.scheduleImage.files[0];

        let scheduleImageUrl = singleData?.scheduleImageUrl;
        if (scheduleImage?.name) {
            scheduleImageUrl = await uploadImg(scheduleImage);
        }

        // Upload new images if any
        let uploadedImages = [];
        if (images.length > 0) {
            uploadedImages = await Promise.all(images.map(img => uploadImg(img)));
        }


        // Set the new images as the updated banner images
        const updatedBannerImages = uploadedImages;



        // Consolidate core values
        const updatedCoreValues = contents.map(content => ({
            heading: content.heading,
            short_des: content.short_des,
        }));

        try {
            const updatedData = {
                mission_desc: missionDesc,
                vision_desc: visionDesc,
                scheduleImageUrl: scheduleImageUrl,
                phone_number: phoneNumber,
                facebook_url: facebookUrl,
                youtube_url: youtubeUrl,
                linkedin_url: linkedinUrl,
                instagrame_url: instagramUrl,
                twitter_url: twitterUrl,
                banner_images: updatedBannerImages,
                core_values: updatedCoreValues,
            };

            console.log(updatedData);
            const response = await axiosPublic.put(`/website-content/${id}`, updatedData);

            if (response.data) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Content updated successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch();
            }
        } catch (error) {
            console.error("Error updating content:", error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed to update content",
                showConfirmButton: true,
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Update Content</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Update Website Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Mission Description</label>
                        <textarea rows={5} type="text" defaultValue={singleData?.mission_desc} name="mission_desc" className="w-full px-4 py-2 border rounded-md" />
                    </div>


                    <div>
                        <label htmlFor="name">Vision Description</label>
                        <textarea rows={5} type="text" defaultValue={singleData?.vision_desc} name="vision_desc" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className="">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" defaultValue={singleData?.phone_number} name="phone_number" className="w-full px-4 py-2 border rounded-md" />
                    </div>




                    <div>
                        <label htmlFor="">Facebook Url</label>
                        <input name="facebook_url" defaultValue={singleData?.facebook_url} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Youtube Url</label>
                        <input name="youtube_url" defaultValue={singleData?.youtube_url} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Linkedin Url</label>
                        <input type="text" name="linkedin_url" defaultValue={singleData?.linkedin_url} className="w-full px-4 py-2 border rounded-md" />
                    </div>


                    <div>
                        <label htmlFor="">Instagram Url</label>
                        <input type="text" name="instagrame_url" defaultValue={singleData?.instagrame_url} className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Twitter Url</label>
                        <input type="text" name="twitter_url" defaultValue={singleData?.twitter_url} className="w-full px-4 py-2 border rounded-md" />

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
                        <p className="my-4">Already uploaded:</p>
                        {
                            singleData.banner_images?.map((image, index) => <div key={index} className="avatar">
                                <div className="w-32 mx-2 rounded">

                                    <img src={image} />
                                </div>
                            </div>)
                        }
                    </div>

                    {/* Feature content Section */}
                    <div className="mb-4">
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
                                    />

                                    <input
                                        type="text"
                                        value={content?.short_des}
                                        onChange={(e) => handleContentChange(index, 'short_des', e.target.value)}
                                        className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                        placeholder="Enter Short description"
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


                        <div className="">
                            <p className="my-4">Already uploaded:</p>
                            <div className="">
                                {
                                    singleData?.core_values?.map((value, index) =>
                                        <div key={index} className="flex justify-between gap-5 border">
                                            <p className="font-bold" key={index}>{value?.heading}</p>
                                            <p key={index}>{value?.short_des}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>


                    </div>

                    <div className=" w-full">
                        <div className="relative">
                            <p>Schedule Section Image</p>
                            <input type="file" name='scheduleImage' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <p>Already uploaded:</p>
                                <img src={singleData?.scheduleImageUrl} />
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                    {loading ? "Uploading..." : "Submit"}
                </button>
            </form>


        </div>
    );
};

export default UpdateContent;
