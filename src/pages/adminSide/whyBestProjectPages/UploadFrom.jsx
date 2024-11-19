import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import ManageBestProject from './ManageBestProject';

const axiosPublic = useAxiosPublic();

const UploadFrom = () => {
    const [loading , setLoading] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const heading = e.target.heading.value;
        const short_description = e.target.short_description.value;
        const payload = {heading, short_description}
        console.log(payload);
        try {
            setLoading(true);
            let res = await axiosPublic.post(`/best-project`,payload);
            setLoading(false);
            if(res.status === 200){
                Swal.fire({
                    position: 'top-end',
                    icon:'success',
                    title: 'Data has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset();
                return;
            }
        } catch (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Failed to save data',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div>
            <div className="w-10/12 mx-auto p-4">
                <Helmet>
                    <title>Dashboard | Upload Best Project Options </title>
                </Helmet>
                <h2 className="text-2xl font-semibold mb-4">Upload </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {loading && <p className="text-blue-500">Uploading data...</p>}

                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="">
                            <label htmlFor="name">Heading</label>
                            <input type="text" name="heading" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="">Short Description</label>
                        <textarea rows={6} name="short_description" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    <div className="w-1/4 mx-auto">
                        <button type="submit" className="w-full py-2 bg-green text-white rounded-md">
                            {loading ? "Uploading..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
            <ManageBestProject></ManageBestProject>
        </div>
    )
}

export default UploadFrom
