import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { uploadImg } from '../../../uploadFile/uploadImg';
import Swal from 'sweetalert2';
import { Editor } from '@tinymce/tinymce-react';
import { uploadVideo } from '../../../uploadFile/uploadVideo';

const PrivacyUpdate = () => {
    const [loading, setLoading] = useState(false);
    const [tinyDescription, setTinyDescription] = useState('');
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    // Fetch content data
    const { data: privacy = {}, isSuccess, refetch } = useQuery({
        queryKey: ['privacy'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/privacy/${id}`);
            return res.data;
        }
    });

    // Sync fetched content description to TinyMCE value
    useEffect(() => {
        if (isSuccess && privacy) {
            setTinyDescription(privacy.description || '');
        }
    }, [isSuccess, privacy]);

    const handleDescriptionChange = (value) => {
        setTinyDescription(value);
    };



   



    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();


        const description = tinyDescription; // Get updated description from TinyMCE state



        try {
            const data = {
                description,
                
            };
            await axiosPublic.put(`/privacy/${id}`, data);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Privacy has been updated',
                showConfirmButton: false,
                timer: 1500,
            });

            refetch();
        } catch (error) {
            console.error('Error submitting form:', error.message);
        } finally {
            setLoading(false);
        }
    };

    window.scrollTo(0, 0);

    return (
      
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Update Privacy</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Update Privacy Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                

                {/* privacy */}
                <div className="p-2 w-full mb-10 h-full">
                    <div className="relative">
                        <label className="leading-7 text-sm font-bold text-gray-600">Privacy Description</label>
                        <Editor
                            apiKey="nosgmebondtn4sbcsmbpwuhzfw3rue7b8tjggdzflgk9o5mw"
                            init={{
                                height: 500,
                                max_height: '500',
                                width: '100%',
                                border: '0px',
                                toolbar:
                                    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                ai_request: (request, respondWith) =>
                                    respondWith.string(() =>
                                        Promise.reject('See docs to implement AI Assistant')
                                    ),
                            }}
                            value={tinyDescription}
                            onEditorChange={handleDescriptionChange}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-green text-white rounded-md">
                        {loading ? 'Uploading...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PrivacyUpdate;
