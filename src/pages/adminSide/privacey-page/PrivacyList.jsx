import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { deleteAlert } from '../../../helper/deleteAlert';
import Swal from 'sweetalert2';


const PrivacyList = () => {
  const axiosPublic = useAxiosPublic();
  window.scrollTo(0, 0);


  // Fetch content data
  const { data: privacyPolicies = [], isSuccess, refetch } = useQuery({
    queryKey: ['privacyPolicies'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/privacy`);
      return res.data;
    }
  });





  

  const handleDelete = async (id) => {
    let resp = await deleteAlert();
    if(resp.isConfirmed){
      let res = await axiosPublic.delete(`/privacy/${id}`);
      if(res){
        refetch()
        Swal.fire({
          title: 'Deleted!',
          text: 'Privacy policy has been deleted.',
          icon:'success',
        })
      } else{
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete privacy policy.',
          icon: 'error',
        })
      }
    }
  };



  return (
    <div>
      <div className="bg-gray-50 py-12">
        <Helmet>
          <title>Dashboard | Privacy </title>
        </Helmet>
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Privacy Policy </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border-b bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-600">ID</th>
                  <th className="border-b bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-600">Content</th>
                  <th className="border-b bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {privacyPolicies.map((policy) => (
                  <tr key={policy.id} className="hover:bg-gray-50">
                    <td className="border-b px-4 py-2 text-sm text-gray-700">{policy.id}</td>
                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: policy?.description?.slice(0, 100) + (policy?.description?.length > 100 ? "..." : ""),
                        }}
                      ></p>
                    </td>                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      <div className="flex gap-2">
                        <Link to={`/dashboard/view-privacy/${policy?._id}`}>
                          <button
                            
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                          >
                            View
                          </button>
                        </Link>
                        <Link to={`/dashboard/privacy-update/${policy?._id}`}>
                          <button
                            className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                          >
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(policy?._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyList
