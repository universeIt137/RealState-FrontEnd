import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { uploadImg } from "../../../uploadFile/uploadImg";
import { uploadVideo } from "../../../uploadFile/uploadVideo";



const AddReview = () => {
    const axiosPublic = useAxiosPublic();

    const { data: content = [], refetch } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get('/chairman');
            return res.data;
        }
    })




    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const heading = form.heading.value;
        const name = form.name.value;
        const role = form.role.value;
        const youtubeVideo = form.youtubeVideo.value;
        const description = form.description.value;

        const image = form.image.files[0];
        const selectedVideo = form.video.files[0];




        let thumbnailUrl = ''
        if (!image?.name) {
            thumbnailUrl = ''
        } else {
            thumbnailUrl = await uploadImg(image);

        }

        let videoUrl = '';
        if (selectedVideo) {
            videoUrl = await uploadVideo(selectedVideo);
        }



        setLoading(true);

        // Simulate form submission
        try {
            const data = { heading, name, role, youtubeVideo, thumbnailUrl, videoUrl,description }

            axiosPublic.post(`/chairman`, data)
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
                <title>Dashboard | Add Review</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Upload Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Heading</label>
                        <input type="text" name="heading" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Role</label>
                        <input type="text" name="role" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Paste Review video Youtube Url</label>
                        <input type="text" name="youtubeVideo" className="w-full px-4 py-2 border rounded-md" />
                    </div>



                </div>

                <div className="grid lg:grid-cols-2 gap-2">
                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload Thumbnil Image</p>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>


                    </div>

                    {/* Video */}
                    <div className=" w-full ">
                        <div className="relative">
                            <p>or Upload Review Video</p>
                            <input type="file" name='video' accept="video/*" className="file-input file-input-bordered file-input-md w-full" />
                        </div>

                    </div>
                </div>

                <div>
                    <label htmlFor="">Short Description</label>
                    <textarea rows={6} name="description" className="w-full px-4 py-2 border rounded-md" />
                </div>

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>


        </div>
    );
};

export default AddReview;
