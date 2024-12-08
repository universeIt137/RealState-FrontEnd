import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const AnimatedPage = () => {
    const [showCurtain, setShowCurtain] = useState(true);

    const curtainVariants = {
        hidden: { width: "50vw" },
        visible: {
            width: "0vw",
            transition: {
                type: "spring", // Spring motion for smooth effect
                stiffness: 70,  // Adjust for more bounciness
                damping: 20,    // Reduces oscillation
                duration: 0.5,  // Extended duration for realism
            },
        },
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
            {/* Curtains */}
            {showCurtain && (
                <>
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#45f798] to-[#079a53] bg-opacity-95 z-10"
                        variants={curtainVariants}
                        initial="hidden"
                        animate="visible"
                        onAnimationComplete={() => setShowCurtain(false)}
                    />
                    <motion.div
                        className="absolute top-0 right-0 h-full bg-gradient-to-l from-[#45f798] to-[#079a53] bg-opacity-95 z-10"
                        variants={curtainVariants}
                        initial="hidden"
                        animate="visible"
                    />
                </>
            )}

            {/* Content */}
            {!showCurtain && (
                // <motion.div
                //     className="relative p-8  border font-bold text-white text-center bg-green rounded-lg shadow-lg"
                //     initial={{ opacity: 0, y: 50 }}
                //     animate={{ opacity: 1, y: 0 }}
                //     transition={{ duration: 0.8, ease: "easeOut" }}
                // >
                //     <div className="flex justify-center items-center">
                //         <img className="w-1/2 bg-white my-5 rounded-lg " src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1733311854/Amer%20Thikana/pcx1j7tch1uhxzlh3huh.png" alt="" />
                //     </div>
                //     <p className=" lg:text-4xl mb-6">
                //         আমার ঠিকানা গ্রীন সিটিতে আপনাকে স্বাগতম
                //     </p>

                // </motion.div>
                <div className="">
                <ReactPlayer
                    url={`https://res.cloudinary.com/dnvmj9pvk/video/upload/v1733648645/Amer%20Thikana/qmhtvbivtpr34tj3pjtv.mp4`}
                    width="100%"
                    height="100%"
                    playing={true} // Autoplay the video
                    // controls={true} // Show playback controls
                    muted={true} // Optional: Mute the video to prevent audio autoplay issues
                />
            </div>
            

            )}
        </div>
    );
};

export default AnimatedPage;
