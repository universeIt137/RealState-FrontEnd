import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadFile/uploadImg';

const UploadCurrentImage = () => {
    window.scrollTo(0, 0);

    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const { data: imgGalleryDataList = [], refetch, isLoading } = useQuery({
        queryKey: ['imgGallery'],
        queryFn: async () => {
            const res = await axiosPublic.get('/current-image');
            // Ensure the response is an array
            return res.data
        },
    });

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
                    .delete(`/current-image/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Image has been deleted.',
                                icon: 'success',
                            });
                            refetch();
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }
        });
    };

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        const form = event.target;
        const imgUrl = event.target.imgUrl.files[0];

        let img = '';

        if (!imgUrl?.name) {
            img = '';
        } else {
            img = await uploadImg(imgUrl);
        }

        const data = { imgUrl: img };

        axiosPublic
            .post(`/current-image`, data)
            .then((res) => {
                if (res) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Image uploaded',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                    form.reset();
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    return (
        <>
            <Helmet>
                <title>Dashboard | Upload Img</title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
                <p className="text-2xl font-bold text-center">Upload Current Image</p>
                <div className="grid gap-3 mx-auto w-1/2">
                    <form onSubmit={handleSubmit} className="">
                        <div className="grid grid-cols-1">
                            <div className="w-full">
                                <div className="p-2 w-full">
                                    <div className="relative space-y-2">
                                        <label
                                            htmlFor="img"
                                            className="leading-7 text-sm text-gray-600 font-medium"
                                        >
                                            Upload Image
                                        </label>
                                        <br />
                                        <input
                                            id="img"
                                            type="file"
                                            name="imgUrl"
                                            className="file-input file-input-bordered file-input-md w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="flex justify-center items-center">
                                <button className="btn bg-green text-white">
                                    {loading ? 'Uploading...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <p className="text-2xl text-center font-bold my-5">Already Uploaded Images</p>
                <div className="grid grid-cols-3 gap-3 w-10/12 mx-auto">
                    {isLoading ? (
                        <p>Loading images...</p>
                    ) : Array.isArray(imgGalleryDataList) && imgGalleryDataList.length > 0 ? (
                        imgGalleryDataList.map((photo) => (
                            <div key={photo?._id} className="">
                                <div className="flex items-center gap-4">
                                    <div
                                        onClick={() => handleDeleteImage(photo?._id)}
                                        className="text-3xl cursor-pointer"
                                    >
                                        <MdDeleteForever className="text-red-700" />
                                    </div>
                                    <div className="text-2xl cursor-pointer">
                                        <Link to={`/dashboard/img-update/${photo?._id}`}>
                                            <FaEdit className="text-red-700" />
                                        </Link>
                                    </div>
                                </div>
                                <img className="w-20 h-20" src={photo?.imgUrl} alt="Uploaded" />
                            </div>
                        ))
                    ) : (
                        <p>No images found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default UploadCurrentImage;
