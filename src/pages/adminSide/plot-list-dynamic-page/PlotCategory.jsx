import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import PlotCategoryList from './PlotCategoryList';



const PlotCategory = () => {

    const axiosPublic = useAxiosPublic();

    const { data: contents = [], refetch } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/plot-category');
            return res.data;
        }
    })

    




    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const category = form.category.value;
       
       




       
        

        setLoading(true);

        // Simulate form submission
        try {
            const data = { category }

            console.log(data);
            axiosPublic.post(`/plot-category`, data)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "center",
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
        <div>
            <div className="w-2/4 mx-auto p-4">
                <Helmet>
                    <title>Dashboard | Manage Representative</title>
                </Helmet>
                <h2 className="text-2xl font-semibold mb-4">Upload Representative Info</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {loading && <p className="text-blue-500">Uploading data...</p>}

                    <div className="grid gap-4">
                        <div className="">
                            <label htmlFor="name">Category</label>
                            <input type="text" name="category" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                    </div>
                    <div className="w-1/4 mx-auto">
                        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                            {loading ? "Uploading..." : "Submit"}
                        </button>
                    </div>
                </form>

                <div className="mt-12">
                    <PlotCategoryList ></PlotCategoryList>
                </div>

            </div>
        </div>
    );
};

export default PlotCategory;