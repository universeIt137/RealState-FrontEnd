import React, { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";





const UpdateCareer = () => {
    const axiosPublic = useAxiosPublic();

    const { id } = useParams();
    const { data: content = {} } = useQuery({
        queryKey: ['career'],
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

        const job_title = form.job_title.value;
        const job_location = form.job_location.value;
        const salary = form.salary.value;
        const education = form.education.value;
        const responsibility = form.responsibility.value;




        setLoading(true);

        // Simulate form submission
        try {
            const data = { job_title, job_location, salary, education, responsibility }

            console.log(data);
            axiosPublic.put(`/career/${id}`, data)
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
                <title>Dashboard | Update Career</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Update Career</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Updating data...</p>}

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="">
                        <label htmlFor="name">Job Title</label>
                        <input type="text" defaultValue={content?.job_title} name="job_title" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Job Location</label>
                        <input type="text" defaultValue={content?.job_location} name="job_location" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="">Salary</label>
                        <input type="text" name="salary" defaultValue={content?.salary} className="w-full px-4 py-2 border rounded-md" />
                    </div>


                    <div>
                        <label htmlFor="">Education</label>
                        <input type="text" name="education" defaultValue={content?.education} className="w-full px-4 py-2 border rounded-md" />
                    </div>





                </div>

                <div>
                    <label htmlFor="">Responsibility</label>
                    <textarea rows={8} defaultValue={content?.responsibility} type="text" name="responsibility" className="w-full px-4 py-2 border rounded-md" />
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

export default UpdateCareer;
