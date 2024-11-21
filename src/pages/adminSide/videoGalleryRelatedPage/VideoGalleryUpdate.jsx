import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { uploadVideo } from '../../../uploadFile/uploadVideo';
import { useNavigate, useParams } from 'react-router-dom';
import { updateAlert } from '../../../helper/updateAlert';


const VideoGalleryUpdate = () => {
    const { id } = useParams();


    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const { data: singleVideoData = [], refetch, isLoading } = useQuery({
        queryKey: ['singleData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/videoGallery/${id}`);
            return res.data;
        }
    });

    let { url: upcommingUrl } = singleVideoData;
    let { img: upcommingImg } = singleVideoData;



    const handleUpdateVideo = async (event) => {
        setLoading(true);
        event.preventDefault();

        const form = event.target;
        const youtubeUrl = form.youtubeUrl.value;
        const url = form.url.files[0];
        const img = event.target.img.files[0];

        let updateVideoUrl = upcommingUrl;

        if (url?.name) {
            updateVideoUrl = upcommingUrl;
        }

        updateVideoUrl = await uploadVideo(url);

        let updateImgUrl = upcommingImg;

        if (img?.name) {
            updateImgUrl = upcommingImg;
        }

        updateImgUrl = await uploadImg(img);

        let payload = {
            youtube_url: youtubeUrl,
            img: updateImgUrl,
            url: updateVideoUrl
        };

        let resp = await updateAlert();

        if (resp.isConfirmed) {
            axiosPublic.put(`/videoGallery/${id}`, payload)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Video gallery was successfully updated",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/dashboard/upload-video")
                        refetch();
                        form.reset();
                        setLoading(false)
                    }
                })
        }



    };



    return (
        <>
            <Helmet>
                <title>Dashboard | Update Video Gallery </title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
                <p className='text-2xl font-bold text-center'>Update Video Gallery</p>
                <div className='grid  gap-3  mx-auto w-1/2'>

                    <form action="" onSubmit={handleUpdateVideo} className=''>

                        <div className='grid grid-cols-1 '>

                            {/* Overview images */}
                            <div className='w-full md:col-span-2'>

                                <div className='w-full'>
                                    <div className="p-2 w-full">
                                        <div className="relative space-y-2">
                                            <label className="leading-7 text-sm text-gray-600 font-medium">Select Video</label><br />
                                            <input id='courseImageInputField' type="file" name='url'
                                                // defaultValue={singleVideoData?.url}
                                                className="file-input file-input-bordered file-input-md w-full" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative space-y-2">
                                            <label className="leading-7 text-sm text-gray-600 font-medium">Upload Youtube Url</label><br />
                                            <input id='courseImageInputField' type="url" name='youtubeUrl'
                                                defaultValue={singleVideoData?.youtubeUrl}
                                                className="file-input file-input-bordered file-input-md w-full" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                            <img src={singleVideoData?.img} />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative space-y-2">
                                            <label htmlFor='img' className="leading-7 text-sm text-gray-600 font-medium">Upload Img </label><br />
                                            <input id='img' type="file" name='img' className="file-input file-input-bordered file-input-md w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-2 w-full">
                            <div className='flex justify-center items-center'>
                                <button className='btn bg-green text-white '>
                                    {
                                        loading ? 'Uploading....' : 'Update'
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

export default VideoGalleryUpdate;
