import React from 'react';
import { Helmet } from 'react-helmet-async';

const BookingPage = () => {

    window.scrollTo(0, 0);

    const downloadForm = async () => {
        const imageUrl = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730635616/real-state-form_lfoa16.jpg";

        try {
            // Fetch the image as a blob
            const response = await fetch(imageUrl, { mode: 'cors' });
            const blob = await response.blob();

            // Create a blob URL and immediately download it
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = "real-estate-form.jpg"; // Specify the download file name
            link.click(); // Trigger the download

            // Clean up the URL after download
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Failed to download image:", error);
        }
    };
    
    return (
        <div>
            <Helmet>
                <title>Amar Thikana | Booking Form</title>
            </Helmet>
        <div className='max-w-screen-xl lg:mt-28 mx-auto'>
            <div className='lg:ml-10'>
                <img className=" block mx-auto w-[900px] " src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730635616/real-state-form_lfoa16.jpg" alt="Real Estate Form" />
                <button className='btn md:text-lg bg-green-600 bg-[#027f3d] bg-opacity-70  text-black my-10 block mx-auto' onClick={downloadForm}>Download</button>
            </div>
        </div>
    </div>
    );
};

export default BookingPage;