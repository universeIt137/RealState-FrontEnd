import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import scheduleStore from '../../../api-request/schedule-api/scheduleStore';
import { statusAlert } from '../../../helper/statusAlert';
import Swal from 'sweetalert2';
import { deleteAlert } from '../../../helper/deleteAlert';
const data = [
    { id: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com", status: "Inactive" },
    { id: 3, name: "Alice Johnson", phone: "555-123-4567", email: "alice@example.com", status: "Active" },
    { id: 4, name: "Bob Brown", phone: "111-222-3333", email: "bob@example.com", status: "Inactive" },
];
const ScheduleList = () => {
    const {scheduleDataListApi,scheduleDataList,statusUpdateApi,scheduleDeleteApi} = scheduleStore();
    const [loading, setLoading] = React.useState(true);
    useEffect(()=>{
        (async()=>{
            setLoading(true);
            await scheduleDataListApi();
            setLoading(false);
        }) ()
    },[])
    const handleStatusUpdate = async (id) => {
        let resp = await statusAlert();
        if(resp.isConfirmed){
            let res = await statusUpdateApi(id);
            if(res){
                await scheduleDataListApi()
                Swal.fire({
                    title: 'Status Updated!',
                    text: 'Meeting status has been updated.',
                    icon:'success',
                })
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update status.',
                    icon: 'error',
                })
            }
        }
    };
    const scheduleDelete = async(id)=>{
        let resp = await deleteAlert(id);
        if(resp.isConfirmed){
            let res = await scheduleDeleteApi(id);
            if(res){
                await scheduleDataListApi()
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Meeting has been deleted.',
                    icon:'success',
                })
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to delete meeting.',
                    icon: 'error',
                })
            }
        }
    }
    return (
        <div>
            <Helmet>
                <title>Dashboard | Schedule List</title>
            </Helmet>
            <div className="w-11/12 mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-4">Metting Schedule List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 text-left text-gray-700 font-medium border-b border-gray-200">Name</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-medium border-b border-gray-200">Phone</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-medium border-b border-gray-200">Email</th>
                                <th className="px-6 py-3 text-left text-gray-700 font-medium border-b border-gray-200">Status</th>
                                <th className="px-6 py-3 text-center text-gray-700 font-medium border-b border-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleDataList && scheduleDataList?.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-gray-900 border-b border-gray-200">{user?.data.full_name}</td>
                                    <td className="px-6 py-4 text-gray-900 border-b border-gray-200">{user?.data.phone_number}</td>
                                    <td className="px-6 py-4 text-gray-900 border-b border-gray-200">{user?.data.email_address}</td>
                                    <td onClick={()=>{ handleStatusUpdate(user._id)  }}
                                        className={`px-6 py-4 cursor-pointer text-sm font-semibold border-b border-gray-200 "
                                            }`}
                                    >
                                        {
                                            user.status ? "Confirmed" : "Not confirmed"
                                        }
                                    </td>
                                    <td className="px-6 py-4 text-center border-b border-gray-200">
                                        
                                        <button onClick={()=>{scheduleDelete(user._id)}}
                                            className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ScheduleList
