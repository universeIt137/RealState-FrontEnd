import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const ManagementList = () => {
  const axiosPublic = useAxiosPublic();


  const { data: contents = [], refetch } = useQuery({
    queryKey: ['allData'],
    queryFn: async () => {
      const res = await axiosPublic.get('/management');
      return res.data;
    }
  })


  const handleDelete = (id) => {
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
          .delete(`/management/${id}`)
          .then((res) => {
            if (res) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Data data has been deleted.',
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


  return (
    <div className="overflow-x-auto w-full my-5">
      <p className="text-2xl font-bold text-center mb-2">Manage Team member</p>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Profile Picture</th>
            <th className="px-4 py-2 border">Position</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contents?.map((content, index) => (
              <tr key={content?._id} className="text-center">
                <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                <td className="px-4 py-2 border font-semibold">{content?.name}</td>
                <td className="px-4 py-2 border">
                  <div className="avatar">
                    <div className="w-12 rounded">

                      <img src={content?.ImgUrl} />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 border font-semibold">{content?.jobPost}</td>
                <td className="px-4 py-2 border font-semibold">{content?.phone}</td>

                <td className="px-4 py-2 border">
                  <button

                    className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                  >
                    <Link to={'/dashboard/update-content'}>Update</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(content?._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagementList;
