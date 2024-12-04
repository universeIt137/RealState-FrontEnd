import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { useParams } from 'react-router-dom';



const ManagementUpdate = () => {

  const axiosPublic = useAxiosPublic();

  const { id } = useParams();
  const { data: content = {} } = useQuery({
    queryKey: ['content', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/management/${id}`);
      return res.data;
    }
  })

  console.log(content);





  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const jobPost = form.jobPost.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const experience = form.experience.value;


    const image = form.image.files[0];





    let ImgUrl = content?.ImgUrl;
    if (!image?.name) {
      ImgUrl = content?.ImgUrl;
    } else {
      ImgUrl = await uploadImg(image);

    }



    setLoading(true);

    // Simulate form submission
    try {
      const data = { name, jobPost, phone, email, experience, ImgUrl }

      console.log(data);
      axiosPublic.put(`/management/${id}`, data)
        .then(res => {
          if (res) {
            Swal.fire({
              position: "center",
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
    <div>
      <div className="w-10/12 mx-auto p-4">
        <Helmet>
          <title>Dashboard | Update Management Team member</title>
        </Helmet>
        <h2 className="text-2xl font-semibold mb-4">Update Management Member Info</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {loading && <p className="text-blue-500">Uploading data...</p>}

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="">
              <label htmlFor="name">Name</label>
              <input type="text" defaultValue={content?.name} name="name" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div className="">
              <label htmlFor="name">Job Postion</label>
              <input type="text" defaultValue={content?.jobPost} name="jobPost" className="w-full px-4 py-2 border rounded-md" />
            </div>

            <div className="">
              <label htmlFor="name">Phone</label>
              <input type="text" name="phone" defaultValue={content?.phone} className="w-full px-4 py-2 border rounded-md" />
            </div>

            <div className="">
              <label htmlFor="name">Email</label>
              <input type="email" name="email" defaultValue={content?.email} className="w-full px-4 py-2 border rounded-md" />
            </div>

            <div className="">
              <label htmlFor="name">Experience</label>
              <input type="text" name="experience" defaultValue={content?.experience} className="w-full px-4 py-2 border rounded-md" />
            </div>




            <div className=" w-full">
              <div className="relative">
                <p>Upload  Picture</p>
                <input type="file" name='image' className="file-input file-input-bordered file-input-md w-full " placeholder="Upload website logo" />
              </div>

              <div className="avatar">
                <div className="w-32 rounded">
                  <p>Already uploaded:</p>
                  <img src={ content?.ImgUrl } />
                </div>
              </div>


            </div>




          </div>


          <div className="w-1/4 mx-auto">
            <button type="submit" className="w-full py-2 bg-green text-white rounded-md">
              {loading ? "Updating..." : "Submit"}
            </button>
          </div>
        </form>


      </div>
      {/* <RepresentativeTable ></RepresentativeTable> */}
    </div>
  );
};

export default ManagementUpdate;