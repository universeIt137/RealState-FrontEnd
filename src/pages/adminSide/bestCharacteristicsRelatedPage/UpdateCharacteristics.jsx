import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";




const UpdateCharacteristics = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const { data: content = {}, refetch } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/character/${id}`);
            return res.data;
        }
    })




    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        console.log(loading)
        const title = form.title.value;
        const description = form.description.value;
      
        // Simulate form submission
        try {
            const data = { title, description }

            console.log(data);
            axiosPublic.put(`/character/${id}`, data)
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
                        form.reset();
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
                <title>Dashboard | Update Characteristics</title>
            </Helmet>
           
            <h2 className="text-2xl font-semibold mb-4">Update Characteristics Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="">
                    <div className="">
                        <label htmlFor="name">Title</label>
                        <input type="text" defaultValue={content?.title} name="title" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                </div>

                <div>
                    <label htmlFor="">Description</label>
                    <textarea rows={6} defaultValue={content?.description} name="description" className="w-full px-4 py-2 border rounded-md" />
                </div>

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-green text-white rounded-md">
                        {loading ? "Uploading..." : "Update"}
                    </button>
                </div>
            </form>


        </div>
    );
};

export default UpdateCharacteristics;
