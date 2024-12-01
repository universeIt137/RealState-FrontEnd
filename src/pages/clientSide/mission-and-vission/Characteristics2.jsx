import React, { useRef, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';




const TestimonialCard = ({ content }) => {
    return (
        <div className=" text-white shadow-lg min-w-[300px] h-[200px] mx-2 bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 p-3 md:p-6 rounded-lg">
            <p className=" mb-4">{content?.title}</p>
            <div className="flex items-center">

                <div>
                    <p className="text-[16px]">{content?.description.slice(0, 180)}</p>
                </div>
            </div>
        </div>
    );
};

const Characteristics2 = () => {
    const scrollRef = useRef(null);
    let isDragging = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;

    const axiosPublic = useAxiosPublic();
    const { data: contents = [] } = useQuery({
        queryKey: ['contents'],
        queryFn: async () => {
            const res = await axiosPublic.get('/character');
            return res.data;
        }
    })

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
        clearInterval(autoScrollInterval); // Pause auto-scroll while dragging
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed here
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false;
        startAutoScroll(); // Resume auto-scroll after dragging ends
    };

    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            if (scrollRef.current) {
                // Scroll to the right by a fixed amount
                scrollRef.current.scrollLeft += 1;

                // If we've scrolled to the end, reset to the start
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
        }, 40); // Adjust the interval for scroll speed
    };

    useEffect(() => {
        startAutoScroll();

        return () => clearInterval(autoScrollInterval); // Clean up interval on unmount
    }, []);

    return (
        <>

            <h2 className="md:text-4xl font-bold text-green-600 text-center my-5 md:mb-6">
                আমাদের বৈশিষ্ট্য
            </h2>
            <div
                className="overflow-x-auto w-10/12 mx-auto p-6 cursor-grab"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                style={{ scrollbarWidth: 'none' }}
            >



                <div className="flex flex-nowrap items-center" style={{ gap: '16px' }}>

                    {contents?.map((content) => (
                        <TestimonialCard key={content._id} content={content} />
                    ))}
                </div>
            </div>
        </>

    );
};
export default Characteristics2;