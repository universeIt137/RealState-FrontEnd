import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { MdDelete, MdDeleteForever, MdEditSquare } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { uploadVideo } from '../../../uploadFile/uploadVideo';
import { FaEdit } from 'react-icons/fa';
import { updateAlert } from '../../../helper/updateAlert';


const UpdateImg = () => {
  const navigate =  useNavigate();

  window.scrollTo(0, 0);
  const { id } = useParams();

  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);


  const { data: singleImgGallery = [], refetch, isLoading } = useQuery({
    queryKey: ['imgGallery'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/imageGallery/${id}`);
      return res.data;
    }
  });

  const { imgUrl: incommingImgUrl } = singleImgGallery;



  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const form = event.target;
    const imgUrl = event.target.imgUrl.files[0];

    let updateImgUrl = incommingImgUrl;

    if (imgUrl?.name) {
      updateImgUrl = incommingImgUrl;
    }

    updateImgUrl = await uploadImg(imgUrl)






    const data = { imgUrl: updateImgUrl };

    const resp = await updateAlert();

    if (resp.isConfirmed) {
      try {
        axiosPublic.put(`/imageGallery/${id}`, data)
          .then(res => {
            if (res) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Img uploaded",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/dashboard/img-upload")
              refetch();
              form.reset();
              setLoading(false)
            }
          })
      } catch (error) {
        console.error(error)
      }
    }


  };

  const handleUpdateVideo = async (id) => {
    console.log(id)

  };


  return (
    <>
      <Helmet>
        <title>Dashboard | Update Img </title>
      </Helmet>
      <div className="bg-white p-5 mx-4 rounded-lg">
        <p className='text-2xl font-bold text-center'>Update Img Gallery</p>
        <div className='grid  gap-3  mx-auto w-1/2'>

          <form action="" onSubmit={handleSubmit} className=''>

            <div className='grid grid-cols-1 '>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={singleImgGallery?.imgUrl} />
                </div>
              </div>

              {/* Overview images */}
              <div className='w-full md:col-span-2'>

                <div className='w-full'>
                  <div className="p-2 w-full">
                    <div className="relative space-y-2">
                      <label htmlFor='img' className="leading-7 text-sm text-gray-600 font-medium">Upload Img </label><br />
                      <input id='img' type="file" name='imgUrl' className="file-input file-input-bordered file-input-md w-full" />
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


      </div>
    </>
  );
};

export default UpdateImg;
