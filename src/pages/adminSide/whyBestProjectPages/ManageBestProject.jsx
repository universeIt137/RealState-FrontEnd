import React, { useState } from 'react';

const ManageBestProject = () => {
    // Example dynamic project data
    const [projects, setProjects] = useState([
        { id: 1, heading: "Project 1", description: "Description for project 1" },
        { id: 2, heading: "Project 2", description: "Description for project 2" },
        { id: 3, heading: "Project 3", description: "Description for project 3" },
    ]);

    // State for editing a project
    const [editingProject, setEditingProject] = useState(null);
    const [newHeading, setNewHeading] = useState("");
    const [newDescription, setNewDescription] = useState("");

    // Handle delete action
    const handleDelete = (projectId) => {
        const updatedProjects = projects.filter(project => project.id !== projectId);
        setProjects(updatedProjects);
    };

    // Start editing a project
    const handleEdit = (project) => {
        setEditingProject(project.id);
        setNewHeading(project.heading);
        setNewDescription(project.description);
    };

    // Handle the update of a project
    const handleUpdate = (projectId) => {
        const updatedProjects = projects.map(project =>
            project.id === projectId
                ? { ...project, heading: newHeading, description: newDescription }
                : project
        );
        setProjects(updatedProjects);
        setEditingProject(null); // Reset edit state after updating
    };

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
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <tr key={project.id} className="text-center">
                                    <td className="px-4 py-2 border font-semibold">{project.heading}</td>
                                    <td className="px-4 py-2 border">{project.description}</td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="px-2 py-1 bg-red-500 text-white rounded mr-2"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleEdit(project)}
                                            className="px-2 py-1 bg-blue-500 text-white rounded"
                                        >
                                            Update
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
            {editingProject && (
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
            )}
        </div>
    );
}

export default ManageBestProject;
