import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom';
import bestProjectStore from '../../../api-request/why-best-project-api/bestProjectApi';
import { updateAlert } from '../../../helper/updateAlert';
import Swal from 'sweetalert2';

const UpdateForm = () => {
    const { singleBestProjectApi, singleBestProjectData, bestProjectsUpdate } = bestProjectStore();
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await singleBestProjectApi(id);
        })();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const heading = form.heading.value;
        const short_description = form.short_description.value;
        const payload = { heading, short_description };

        setLoading(true); // Start loading
        const resp = await updateAlert();
        setLoading(false); // Stop loading while waiting for confirmation

        if (resp.isConfirmed) {
            setLoading(true); // Start loading for the update request
            const res = await bestProjectsUpdate(id, payload);
            setLoading(false); // Stop loading

            if (res) {
                await singleBestProjectApi(id);
                navigate("/dashboard/best-upload-form")
                Swal.fire({
                    title: "Success!",
                    text: "Your file has been updated.",
                    icon: "success"
                });
                form.reset();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update file.",
                    icon: "error"
                });
            }
        }
    };

    return (
        <div>
            <div className="w-10/12 mx-auto p-4">
                <Helmet>
                    <title>Dashboard | Upload Best Update</title>
                </Helmet>
                <h2 className="text-2xl font-semibold mb-4">Upload</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {loading && <p className="text-blue-500">Uploading data...</p>}

                    <div className="grid lg:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name">Heading</label>
                            <input
                                type="text"
                                name="heading"
                                defaultValue={singleBestProjectData?.heading}
                                key={Date.now()}
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Short Description</label>
                        <textarea
                            rows={6}
                            name="short_description"
                            defaultValue={singleBestProjectData?.short_description}
                            key={Date.now()}
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    <div className="w-1/4 mx-auto">
                        <button
                            type="submit"
                            className={`w-full py-2 text-white rounded-md ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green'}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <span className="loader mr-2"></span> {/* Loader */}
                                    Uploading...
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;
