import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { MdDelete, MdDeleteForever, MdEditSquare } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { uploadImg } from '../../../uploadFile/uploadImg';


const ManageProjectOverview = () => {



    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);


    const { data: allPhotos = [], refetch, isLoading } = useQuery({
        queryKey: ['photoGallery'],
        queryFn: async () => {
            const res = await axiosPublic.get('/overview');
            return res.data;
        }
    })





    const handleDeleteImage = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .delete(`/overview/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Photo has been deleted.',
                                icon: 'success',
                            });
                            refetch();
                        }

                    })
                    .catch((err) => {

                    });
            }
        });
    };

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        const form = event.target;
        const description = form.description.value;

        const GalleryImage = form.image1.files[0];


        let ImageUrl = '';
        if (GalleryImage?.name) {
            ImageUrl = await uploadImg(GalleryImage);
        }

        const data = { ImageUrl, description };

        axiosPublic.post(`/overview`, data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data uploaded",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                    form.reset();
                    setLoading(false)
                }
            })
    };


    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Photo Gallery</title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
                <p className='text-2xl font-bold text-center'>Manage Project Overview</p>
                <div className='grid  gap-3  mx-auto w-1/2'>

                    <form action="" onSubmit={handleSubmit} className=''>

                        <div className='grid grid-cols-1 '>

                            {/* Overview images */}
                            <div className='w-full md:col-span-2'>

                                <div className='w-full'>
                                    <div className="p-2 w-full">
                                        <div className="relative space-y-2">
                                            <label className="leading-7 text-sm text-gray-600 font-medium">Select Image</label><br />
                                            <input id='courseImageInputField' type="file" name='image1' className="file-input file-input-bordered file-input-md w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                            <label className="leading-7 text-sm text-gray-600 font-medium">Brief Description</label><br />
                                <textarea rows={6} name="description" className="w-full px-4 py-2 border rounded-md" />
                            </div>

                        </div>
                        <div className="p-2 w-full">
                            <div className='flex justify-center items-center'>
                                <button className='btn text-white bg-green'>
                                    {
                                        loading ? 'Uploading....' : 'Submit'
                                    }
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
                <p className=' text-2xl text-center font-bold my-5'>Already Uploaded Images</p>
                <div className="grid grid-cols-3 gap-3  w-10/12 mx-auto">
                    {
                        allPhotos?.map(photo =>
                            <div key={photo?._id} className="">
                                <div onClick={() => handleDeleteImage(photo?._id)} className="text-4xl ">
                                    <MdDeleteForever className='text-red-700' />
                                </div>
                                <div className="avatar">
                                    <div className="rounded-xl">
                                        <img src={photo?.ImageUrl} />

                                    </div>
                                </div>
                                <p className="">
                                    {photo?.description.slice(0, 40)}
                                </p>
                            </div>



                        )
                    }
                </div>

            </div>
        </>
    );
};

export default ManageProjectOverview;