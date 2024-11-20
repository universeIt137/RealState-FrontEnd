import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { uploadImg } from '../../../uploadFile/uploadImg';
import Swal from 'sweetalert2';

const UpdateCSR = () => {
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const { data: content = {}, refetch } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/csr/${id}`);
            return res.data;
        }
    })


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.files[0];




        let BannerImageUrl = content?.BannerImageUrl;
        if (!image?.name) {
            BannerImageUrl = content?.BannerImageUrl;
        } else {
            BannerImageUrl = await uploadImg(image);

        }




        setLoading(true);

        // Simulate form submission
        try {
            const data = { title, description, BannerImageUrl }

            console.log(data);
            axiosPublic.put(`/csr/${id}`, data)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "CSR has been updated",
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
                <title>Dashboard | Update CSR</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Update CSR's Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Title</label>
                        <input type="text" defaultValue={content?.title} name="title" className="w-full px-4 py-2 border rounded-md" />
                    </div>



                    <div className=" w-full">
                        <div className="relative">
                            <p>Upload Banner Picture</p>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                        </div>
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <p>Already uploaded:</p>
                                <img src={content?.BannerImageUrl} />
                            </div>
                        </div>

                    </div>



                </div>

                <div>
                    <label htmlFor="">Description</label>
                    <textarea rows={6} defaultValue={content?.description} name="description" className="w-full px-4 py-2 border rounded-md" />
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

export default UpdateCSR;