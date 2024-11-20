import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { uploadImg } from "../../../uploadFile/uploadImg";
import { useParams } from "react-router-dom";




const UpdateCertificate = () => {
    const axiosPublic = useAxiosPublic();

    const { id } = useParams();

    const { data: singleData = {} } = useQuery({
        queryKey: ['single Data'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/certificate/${id}`);
            return res.data;
        }
    })



    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const category = form.category.value;
        const image = form.image.files[0];




        let certificateImageUrl = singleData?.certificateImageUrl
        if (!image?.name) {
            certificateImageUrl = singleData?.certificateImageUrl
        } else {
            certificateImageUrl = await uploadImg(image);

        }




        setLoading(true);

        // Simulate form submission
        try {
            const data = { title, category, certificateImageUrl }

            console.log(data);
            axiosPublic.put(`/certificate/${id}`, data)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Data has been updated",
                            showConfirmButton: false,
                            timer: 1500
                        });

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
                <title>Dashboard | Update Certificate</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Update Certificate</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Title</label>
                        <input type="text" defaultValue={singleData?.title} name="title" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Category</label>
                        <input type="text" defaultValue={singleData?.category} name="category" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload Certificate</p>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <p>Already uploaded:</p>
                                <img src={singleData?.certificateImageUrl} />
                            </div>
                        </div>

                    </div>



                </div>



                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-green text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>


        </div>
    );
};

export default UpdateCertificate;
