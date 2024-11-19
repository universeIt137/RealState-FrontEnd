import React, { useEffect, useState } from 'react';
import bestProjectStore from '../../../api-request/why-best-project-api/bestProjectApi';
import { deleteAlert } from '../../../helper/deleteAlert';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageBestProject = () => {
    const { bestProjectsApi, bestProjectsData, bestProjectsDelete } = bestProjectStore();

    useEffect(() => {
        (async () => {
            await bestProjectsApi();
        })()
    }, []);

    const projectDelete = async (id) => {
        console.log(id);
        let resp = await deleteAlert ();
        if (resp.isConfirmed) {
            let res = await bestProjectsDelete(id);
            if (res) {
                await bestProjectsApi()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                return;
            } else {
                Swal.fire({
                    title: "Failed!",
                    text: "Failed to delete the file.",
                    icon: "error"
                });
            }
        }
    }


    return (
        <div>
            <div className="overflow-x-auto w-full my-5">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Project Heading</th>
                            <th className="px-4 py-2 border">Project Description</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bestProjectsData.length > 0 ? (
                            bestProjectsData.map((project) => (
                                <tr key={project._id} className="text-center">
                                    <td className="px-4 py-2 border font-semibold">{project.heading}</td>
                                    <td className="px-4 py-2 border">{project.short_description}</td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() => projectDelete(project._id)}
                                            className="px-2 py-1 bg-red-500 text-white rounded mr-2"
                                        >
                                            Delete
                                        </button>
                                        <button

                                            className="px-2 py-1 bg-blue-500 text-white rounded"
                                        >
                                            <Link to={`/dashboard/update/${project._id}`}>Update</Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center px-4 py-2 border">No projects available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Update Form (Visible when editingProject is not null) */}
            {/* {editingProject && (
                <div className="mt-5 p-4 border border-gray-300 bg-gray-50">
                    <h2 className="text-lg font-semibold mb-3">Update Project</h2>
                    <div>
                        <label className="block text-sm font-medium mb-2">Project Heading</label>
                        <input
                            type="text"
                            value={newHeading}
                            onChange={(e) => setNewHeading(e.target.value)}
                            className="w-full p-2 border border-gray-300 mb-3"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Project Description</label>
                        <input
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="w-full p-2 border border-gray-300 mb-3"
                        />
                    </div>
                    <button
                        onClick={() => handleUpdate(editingProject)}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Update Project
                    </button>
                </div>
            )} */}
        </div>
    );
}

export default ManageBestProject;
