import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { uploadImg } from "../../../uploadFile/uploadImg";




const ApplyForm = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const { data: content = {}, refetch } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/career/${id}`);
            return res.data;
        }
    })




    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const job_title = content?.job_title;

        const image = form.image.files[0];





        let cvImageUrl = ''
        if (!image?.name) {
            cvImageUrl = ''
        } else {
            cvImageUrl = await uploadImg(image);

        }





        setLoading(true);

        // Simulate form submission
        try {
            const data = {
                name,
                location,
                phone,
                cvImageUrl,
                job_title
            }

            console.log(data);
            axiosPublic.post(`/apply`, data)
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
            form.reset();
        }
    };

    return (
        <div className="w-3/4 mx-auto p-4 my-20">
            <Helmet>
                <title>Amer Thikana  | Apply Now</title>
            </Helmet>
            <h2 className="text-2xl text-green font-semibold mb-4">Upload Your Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <p className="font-bold text-xl"> Job Post: {content?.job_title}</p>
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-2 gap-4 border p-8 rounded-lg shadow-lg">
                    <div className="">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Location</label>
                        <input type="text" name="location" className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" name="phone" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload Your CV</p>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>


                    </div>



                </div>



                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-gradient-to-r from-[#027F3D] to-[#034A26] text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>


        </div>
    );
};

export default ApplyForm;
