import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { MdDelete, MdDeleteForever, MdEditSquare } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { Link } from 'react-router-dom';
import { uploadVideo } from '../../../uploadFile/uploadVideo';


const UploadVideo = () => {



    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);


    const { data: videoGalleryData  = [], refetch, isLoading } = useQuery({
        queryKey: ['videoGallery'],
        queryFn: async () => {
            const res = await axiosPublic.get('/videoGallery');
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
                    .delete(`/videoGallery/${id}`).then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Video has been deleted.',
                                icon: 'success',
                            });
                            refetch();
                        }

                    })
                    .catch((err) => {
                        console.log(err);

                    });
            }
        });
    };

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        const form = event.target;
        const youtubeUrl = form.youtubeUrl.value;
        const url = form.url.files[0];
        const img = event.target.img.files[0]

        let imgUrl = '';

        if(!img?.name){
            imgUrl = ""
        }
        imgUrl = await uploadImg(img);

        let videoUrl = ""

        if(!name?.url){
            videoUrl = ""
        }
        videoUrl = await uploadVideo(url);
        
        

        const data = { youtubeUrl : youtubeUrl , url:videoUrl,img:imgUrl };

        axiosPublic.post(`/videoGallery`, data)
            .then(res => {
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Video uploaded",
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
                <title>Dashboard | Upload Video</title>
            </Helmet>
            <div className="bg-white p-5 mx-4 rounded-lg">
                <p className='text-2xl font-bold text-center'>Upload Video Gallery</p>
                <div className='grid  gap-3  mx-auto w-1/2'>

                    <form action="" onSubmit={handleSubmit} className=''>

                        <div className='grid grid-cols-1 '>

                            {/* Overview images */}
                            <div className='w-full md:col-span-2'>

                                <div className='w-full'>
                                    <div className="p-2 w-full">
                                        <div className="relative space-y-2">
                                            <label className="leading-7 text-sm text-gray-600 font-medium">Select Video</label><br />
                                            <input id='courseImageInputField' type="file" name='url' className="file-input file-input-bordered file-input-md w-full" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative space-y-2">
                                            <label className="leading-7 text-sm text-gray-600 font-medium">Upload Youtube Url</label><br />
                                            <input id='courseImageInputField' type="url" name='youtubeUrl' className="file-input file-input-bordered file-input-md w-full" />
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
                        videoGalleryData?.map(photo =>
                            <div key={photo?._id} className="">
                                <div onClick={() => handleDeleteImage(photo?._id)} className="text-4xl cursor-pointer ">
                                    <MdDeleteForever className='text-red-700' />
                                </div>
                                <Link to={photo?.youtubeUrl || photo?.url } >
                                    <img className='w-20 h-20 '  src= {photo?.img}  alt="" />
                                </Link>
                                
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    );
};

export default UploadVideo;
