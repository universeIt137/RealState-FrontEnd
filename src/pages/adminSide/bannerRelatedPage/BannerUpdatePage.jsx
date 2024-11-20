import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { MdDelete, MdDeleteForever, MdEditSquare } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { useNavigate, useParams } from 'react-router-dom';


const BannerUpdatePage = () => {
    const { id } = useParams();


    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);


    const { data: singleBannerData = [], refetch, isLoading } = useQuery({
        queryKey: ['singleBanner'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/banner/${id}`);
            return res.data;
        }
    });

    const navigate = useNavigate();



    const {img : upcommingImg } = singleBannerData;



    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        const form = event.target;
        const banner_text = form.banner_text.value;

        const img = form.img.files[0];
        // console.log(GalleryImage)

        let updateImgUrl = upcommingImg;

        if (img?.name) {
            updateImgUrl = upcommingImg;
        }
        updateImgUrl = await uploadImg(img)

        const data = { img: updateImgUrl, banner_text };

        axiosPublic.put(`/banner/${id}`, data)
            .then(res => {
                if (res) {
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data uploaded",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                    form.reset();
                    navigate("/dashboard/manage-banner");
                    setLoading(false);
                    return;
                }
            })
    };


    return (
        <>
            <Helmet>
                <title>Dashboard | Manage Banner Gallery</title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
                <p className='text-2xl font-bold text-center'>Manage Banner</p>
                <div className='grid  gap-3  mx-auto w-1/2'>

                    <form action="" onSubmit={handleSubmit} className=''>

                        <div className='grid grid-cols-1 '>

                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src={singleBannerData?.img} />
                                </div>
                            </div>

                            {/* Overview images */}
                            <div className='w-full md:col-span-2'>

                                <div className='w-full'>
                                    <div className="p-2 w-full">
                                        <div className="relative space-y-2">
                                            <label className="leading-7 text-sm text-gray-600 font-medium">Select Image</label><br />
                                            <input id='courseImageInputField' type="file" name='img' className="file-input file-input-bordered file-input-md w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="leading-7 text-sm text-gray-600 font-medium">Description</label><br />
                                <textarea rows={6} name="banner_text" defaultValue={singleBannerData?.banner_text} key={Date.now()} className="w-full px-4 py-2 border rounded-md" />
                            </div>

                        </div>
                        <div className="p-2 w-full">
                            <div className='flex justify-center items-center'>
                                <button className='btn btn-primary'>
                                    {
                                        loading ? 'Uploading....' : 'Submit'
                                    }
                                </button>
                            </div>
                        </div>

                    </form>
                </div>


            </div>
        </>
    );
};

export default BannerUpdatePage;