import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { uploadImg } from '../../../uploadFile/uploadImg';
import Swal from 'sweetalert2';
import { Editor } from '@tinymce/tinymce-react';
import { uploadVideo } from '../../../uploadFile/uploadVideo';

const UpdateCSR = () => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [tinyDescription, setTinyDescription] = useState('');
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    // Fetch content data
    const { data: content = {}, isSuccess, refetch } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/csr/${id}`);
            return res.data;
        }
    });

    // Sync fetched content description to TinyMCE value
    useEffect(() => {
        if (isSuccess && content) {
            setTinyDescription(content.description || '');
            setImages(content.images || []);
        }
    }, [isSuccess, content]);

    const handleDescriptionChange = (value) => {
        setTinyDescription(value);
    };


    // Image related Function 

    const handleImageChange = async (e) => {
        const files = Array.from(e.target.files);

        try {
            setLoading(true);
            const uploadedUrls = await Promise.all(
                files.map(async (file) => await uploadImg(file)) // Upload each file using your uploadImg function
            );
            setImages([...images, ...uploadedUrls]); // Update the state with uploaded image URLs
        } catch (error) {
            console.error("Error uploading images:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong while uploading images!',
            });
        } finally {
            setLoading(false);
        }
    };

     // Function to delete an image
     const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index); // Remove image from state
        setImages(updatedImages);
    };


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        // Upload each image individually
        const imageUrls = await Promise.all(
            images.map(async (image) => await uploadImg(image))
        );


        const title = form.title.value;
        const youtubeVideo = form.youtubeVideo.value;
        const description = tinyDescription; // Get updated description from TinyMCE state
        const image = form.image.files[0];
        const selectedVideo = form.video.files[0];


        let BannerImageUrl = content?.BannerImageUrl;
        if (image?.name) {
            BannerImageUrl = await uploadImg(image);
        }
        let videoUrl = content?.videoUrl;
        if (selectedVideo) {
            videoUrl = await uploadVideo(selectedVideo);
        }


        try {
            const data = {
                title,
                description,
                BannerImageUrl,
                images: imageUrls,
                videoUrl,
                youtubeVideo
            };
            await axiosPublic.put(`/csr/${id}`, data);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'CSR has been updated',
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

    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Update CSR</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Update CSR's Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid lg:grid-cols-3 gap-4">
                    {/* Title */}
                    <div>
                        <label htmlFor="name">Title</label>
                        <input
                            type="text"
                            defaultValue={content?.title}
                            name="title"
                            className="w-full px-4 py-2 border rounded-md"
                        />
                    </div>

                    {/* Upload Banner */}
                    <div className="w-full">
                        <div className="relative">
                            <p>Upload Banner Picture</p>
                            <input
                                type="file"
                                name="image"
                                className="file-input file-input-bordered file-input-md w-full"
                                placeholder="Upload website logo"
                            />
                        </div>
                        {content?.BannerImageUrl && (
                            <div className="avatar">
                                <div className="w-32 rounded">
                                    <p>Already uploaded:</p>
                                    <img src={content?.BannerImageUrl} alt="Banner" />
                                </div>
                            </div>
                        )}
                    </div>


                    


                    {/* Multiple Image Upload */}
                    <div className="p-2 w-full">
                        <label className="leading-7 text-sm text-gray-600 font-bold"> Multiple Slider Images</label>
                        <input
                            type="file"
                            name="images"
                            multiple
                            onChange={handleImageChange}
                            className="file-input file-input-bordered file-input-md w-full"
                            disabled={loading} // Disable input during upload
                        />
                        <div className="flex flex-wrap gap-4 mt-4">
                            {images?.map((img, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={img}
                                        alt={`preview-${index}`}
                                        className="h-20 w-20 object-cover rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Youtube video</label>
                        <input type="text" defaultValue={content?.youtubeVideo} name="youtubeVideo" className="w-full px-4 py-2 border rounded-md" />
                    </div>

                    {/* Video */}
                    <div className=" w-full ">
                        <div className="relative">
                            <p>Upload Video</p>
                            <input type="file" name='video' accept="video/*" className="file-input file-input-bordered file-input-md w-full" />
                        </div>

                    </div>



                </div>

                {/* Blog Description */}
                <div className="p-2 w-full mb-10 h-full">
                    <div className="relative">
                        <label className="leading-7 text-sm font-bold text-gray-600">Blog Description</label>
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

export default UpdateCSR;
