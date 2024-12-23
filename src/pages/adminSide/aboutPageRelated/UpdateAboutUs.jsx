import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { uploadImg } from '../../../uploadFile/uploadImg';

const UpdateAboutUs = () => {

    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const { data: content = {}, refetch } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/about-us/${id}`);
            return res.data;
        }
    })

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const firstHeading = form.first_heading.value;
        const firstDes = form.first_des.value;
        const firstLogo = form.first_logo.files[0];


        const secondHeading = form.secondHeading.value;
        const secondDesc = form.secondDesc.value;
        const secondLogo = form.secondLogo.files[0];

        const thirdHeading = form.thirdHeading.value;
        const thirdDesc = form.thirdDesc.value;
        const thirdLogo = form.thirdLogo.files[0];


        let firstLogoUrl = content?.firstLogoUrl
        if (!firstLogo?.name) {
            firstLogoUrl = content?.firstLogoUrl
        } else {
            firstLogoUrl = await uploadImg(firstLogo);

        }

        let secondLogoUrl = content?.secondLogoUrl
        if (!secondLogo?.name) {
            secondLogoUrl = content?.secondLogoUrl
        } else {
            secondLogoUrl = await uploadImg(secondLogo);

        }

        let thirdLogoUrl = content?.thirdLogoUrl
        if (!thirdLogo?.name) {
            thirdLogoUrl = content?.thirdLogoUrl
        } else {
            thirdLogoUrl = await uploadImg(thirdLogo);

        }





        // Simulate form submission
        try {
            const data = { firstHeading, firstDes, firstLogoUrl, secondHeading, secondDesc, secondLogoUrl, thirdHeading, thirdDesc, thirdLogoUrl }


            axiosPublic.put(`/about-us/${id}`, data)
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
            <div className="w-10/12 mx-auto p-4">
                <Helmet>
                    <title>Dashboard | Update About Us</title>
                </Helmet>
                <h2 className="text-2xl font-semibold mb-4">Update About Us page's Content</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {loading && <p className="text-blue-500">Uploading data...</p>}

                    <p className="text-3xl">First Section</p>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="">
                            <div className="">
                                <label htmlFor="name">First Section Heading</label>
                                <input type="text" defaultValue={content?.firstHeading} name="first_heading" className="w-full px-4 py-3 border rounded-md" />
                            </div>
                            <div className=" w-full">
                                <div className="relative">
                                    <p>First Section Image</p>
                                    <input type="file" name='first_logo' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                                </div>
                                <div className="avatar">
                                    <div className=" w-44 rounded">
                                        <p>Uploaded:</p>
                                        <img src={content?.firstLogoUrl} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">First Section Description</label>
                            <textarea type="text" defaultValue={content?.firstDes} rows={4} name="first_des" className="w-full px-4 py-3 border rounded-md" />
                        </div>
                    </div>

                    <p className="text-3xl">Second Section</p>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="">
                            <div className="">
                                <label htmlFor="name">Second Section Heading</label>
                                <input type="text" defaultValue={content?.secondHeading}  name="secondHeading" className="w-full px-4 py-3 border rounded-md" />
                            </div>
                            <div className=" w-full">
                                <div className="relative">
                                    <p>Second Section Image</p>
                                    <input type="file" name='secondLogo' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                                </div>
                                <div className="avatar">
                                    <div className=" w-44 rounded">
                                        <p>Uploaded:</p>
                                        <img src={content?.secondLogoUrl} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Second Section Description</label>
                            <textarea type="text" defaultValue={content?.secondDesc} rows={4} name="secondDesc" className="w-full px-4 py-3 border rounded-md" />
                        </div>
                    </div>

                    <p className="text-3xl">Third Section</p>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="">
                            <div className="">
                                <label htmlFor="name">Third Section Heading</label>
                                <input type="text" defaultValue={content?.thirdHeading} name="thirdHeading" className="w-full px-4 py-3 border rounded-md" />
                            </div>
                            <div className=" w-full">
                                <div className="relative">
                                    <p>Third Section Image</p>
                                    <input type="file" name='thirdLogo' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
                                </div>
                                <div className="avatar">
                                    <div className=" w-44 rounded">
                                        <p>Uploaded:</p>
                                        <img src={content?.thirdLogoUrl} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Third Section Description</label>
                            <textarea type="text" defaultValue={content?.thirdDesc} rows={4} name="thirdDesc" className="w-full px-4 py-3 border rounded-md" />
                        </div>
                    </div>


                    <div className="w-1/4 mx-auto">
                        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                            {loading ? "Uploading..." : "Submit"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateAboutUs;