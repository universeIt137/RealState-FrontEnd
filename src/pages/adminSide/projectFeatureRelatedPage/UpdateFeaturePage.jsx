import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const UpdateFeaturePage = () => {
    const [heading, setHeading] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [contents, setContents] = useState([{ content_name: '' }]);
    const [videos, setVideos] = useState([{ videoUrl: '' }]);
    const [images, setImages] = useState([]); // Array to store uploaded image URLs
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();

    const { id } = useParams();

    const { data: fetchedData = {}, isSuccess } = useQuery({
        queryKey: ['singleFeature', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/feature/${id}`);
            return res.data;
        },
    });

    useEffect(() => {
        if (isSuccess && fetchedData) {
            // Populate fields with fetched data
            setHeading(fetchedData.heading || '');
            setAddress(fetchedData.address || '');
            setDescription(fetchedData.description || '');
            setContents(fetchedData.contents || [{ content_name: '' }]);
            setVideos(fetchedData.videos || [{ videoUrl: '' }]);
            setImages(fetchedData.images || []);
        }
    }, [isSuccess, fetchedData]);

    const handleContentChange = (index, field, value) => {
        const updatedContents = contents.map((content, i) =>
            i === index ? { ...content, [field]: value } : content
        );
        setContents(updatedContents);
    };

    const handleVideoChange = (index, field, value) => {
        const updatedVideos = videos.map((video, i) =>
            i === index ? { ...video, [field]: value } : video
        );
        setVideos(updatedVideos);
    };

    const addContent = () => {
        setContents([...contents, { content_name: '' }]);
    };

    const addVideo = () => {
        setVideos([...videos, { videoUrl: '' }]);
    };

    const removeContent = (index) => {
        setContents(contents.filter((_, i) => i !== index));
    };

    const removeVideo = (index) => {
        setVideos(videos.filter((_, i) => i !== index));
    };

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
        e.preventDefault();
        setLoading(true);

        // Upload each image individually
        const imageUrls = await Promise.all(
            images.map(async (image) => await uploadImg(image))
        );

        const packageData = {
            heading,
            address,
            description,
            contents,
            images: imageUrls, // Array of image URLs
            videos,
        };

        // Submit data to the server
        axiosPublic.put(`/feature/${id}`, packageData)
            .then((res) => {
                if (res) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your feature has been updated successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => console.error(error));

        setLoading(false);
    };

    return (
        <div className="mx-auto bg-white p-6 shadow-lg rounded-lg">
            <Helmet>
                <title>Dashboard | Update Feature</title>
            </Helmet>

            <h2 className="text-2xl font-bold text-center mb-6">Update Feature</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Heading Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Feature Heading</label>
                        <input
                            type="text"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter heading"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                            placeholder="Enter address"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Package Description</label>
                    <textarea
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                        placeholder="Enter package description"
                        required
                        rows={8}
                    ></textarea>
                </div>


                {/* Multiple Image Upload */}
                <div className="p-2 w-full">
                    <label className="leading-7 text-sm text-gray-600 font-bold">Upload Multiple Project Images</label>
                    <input
                        type="file"
                        name="images"
                        multiple
                        onChange={handleImageChange}
                        className="file-input file-input-bordered file-input-md w-full"
                        disabled={loading} // Disable input during upload
                    />
                    <div className="flex flex-wrap gap-4 mt-4">
                        {images.map((img, index) => (
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


                {/* Feature Content Section */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-xl">Feature Content</label>
                    {contents.map((content, index) => (
                        <div key={index} className="flex gap-4 mb-2">
                            <input
                                type="text"
                                value={content.content_name}
                                onChange={(e) => handleContentChange(index, 'content_name', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                placeholder="Enter Content Name"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => removeContent(index)}
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addContent}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Content
                    </button>
                </div>

                {/* Video Section */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2 text-xl">Feature Videos</label>
                    {videos.map((video, index) => (
                        <div key={index} className="flex gap-4 mb-2">
                            <input
                                type="url"
                                value={video.videoUrl}
                                onChange={(e) => handleVideoChange(index, 'videoUrl', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
                                placeholder="Enter Video URL"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => removeVideo(index)}
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addVideo}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Video
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`mt-4 w-full bg-green text-white p-3 rounded ${loading && 'opacity-50 cursor-not-allowed'}`}
                >
                    {loading ? 'Updating...' : 'Update Feature'}
                </button>
            </form>
        </div>
    );
};

export default UpdateFeaturePage;
