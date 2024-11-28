import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { uploadVideo } from '../../../uploadFile/uploadVideo';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const UpdateReview = () => {
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { data: review = {}, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/client-review/${id}`);
            return res.data;
        }
    })

    window.scrollTo(0, 0);

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




        let thumbnailUrl = review?.thumbnailUrl;
        if (!image?.name) {
            thumbnailUrl = review?.thumbnailUrl;
        } else {
            thumbnailUrl = await uploadImg(image);

        }

        let videoUrl = review?.videoUrl;
        if (selectedVideo) {
            videoUrl = await uploadVideo(selectedVideo);
        }



        setLoading(true);

        // Simulate form submission
        try {
            const data = { heading, name, role, youtubeVideo, thumbnailUrl, videoUrl, description }

            console.log(data);
            axiosPublic.put(`/client-review/${id}`, data)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Data has been updated",
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
        <div>
            <Helmet>
                <title>Dashboard | Update Review</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Update Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Heading</label>
                        <input type="text" defaultValue={review?.heading} name="heading" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" defaultValue={review?.name} name="name" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Role</label>
                        <input type="text" defaultValue={review?.role} name="role" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Paste Review video Youtube Url</label>
                        <input type="text" defaultValue={review?.youtubeVideo} name="youtubeVideo" className="w-full px-4 py-2 border rounded-md" />
                    </div>



                </div>

                <div className="grid lg:grid-cols-2 gap-2">
                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload Thumbnil Image</p>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <p>Already uploaded:</p>
                                <img src={review?.thumbnailUrl} />
                            </div>
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
                    <textarea rows={6} defaultValue={review?.description} name="description" className="w-full px-4 py-2 border rounded-md" />
                </div>

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-green text-white rounded-md">
                        {loading ? "Updating..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;