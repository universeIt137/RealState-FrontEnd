import React, { useState } from "react";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Editor } from "@tinymce/tinymce-react";




const CreatePrivacy = () => {
    const axiosPublic = useAxiosPublic();



    const [formData, setFormData] = useState({
        description: '',

    });

    const handleDescriptionChange = (value) => {
        setFormData({ ...formData, description: value });
    };



    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const description = formData.description;

        setLoading(true);

        // Simulate form submission
        try {
            const data = {
                description,
            }

            console.log(data);
            axiosPublic.post(`/privacy`, data)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Privacy has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        } catch (error) {
            console.error("Error submitting form:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Add Privacy</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Upload Privacy Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                



                {/* Description */}
                <div className="p-2 w-full mb-10 h-full">
                    <div className="relative">
                        <label className="leading-7 text-sm font-bold text-gray-600">Blog Description</label>

                        <Editor
                            apiKey='atnary0we9a0nuqjzgtnpxyd0arpbwud7ocxkjxqjtaab3nm'
                            init={{
                                height: 500,
                                max_height: "500",
                                width: '100%',
                                border: "0px",
                                //    menubar: false,
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                // mergetags_list: [
                                //   { value: 'First.Name', title: 'First Name' },
                                //   { value: 'Email', title: 'Email' },
                                // ],
                                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                            }}
                            value={formData.description}
                            onEditorChange={handleDescriptionChange} />
                    </div>

                </div>


                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-green text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>


        </div>
    );
};

export default CreatePrivacy;

