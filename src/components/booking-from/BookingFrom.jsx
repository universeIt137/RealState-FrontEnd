import React from 'react';

const BookingForm = () => {
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
        <div className='' >
            <div className='max-w-screen-xl mx-auto lg:mt-32 '>
                <div className='lg:ml-10'>
                    <img className="h-[600px] block mx-auto w-[900px] " src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730635616/real-state-form_lfoa16.jpg" alt="Real Estate Form" />
                    <button className=' md:text-lg bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 text-white  my-10 block mx-auto' onClick={downloadForm}>Download</button>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
