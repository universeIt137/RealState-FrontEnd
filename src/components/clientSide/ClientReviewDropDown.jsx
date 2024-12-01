import React, { useState, useEffect } from 'react';
import { FaPlay, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
import ClientReviewHome from '../../pages/clientSide/home-page/ClientReviewHome';

function ClientReviewDropDown() {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoChange, setAutoChange] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const { data: reviewData = [] } = useQuery({
        queryKey: ['reviewDataItem'],
        queryFn: async () => {
            let res = await axiosPublic.get(`/client-review`);
            return res.data;
        }
    });

    window.scrollTo(0, 0);

    useEffect(() => {
        if (!autoChange) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoChange, reviewData.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewData.length) % reviewData.length);
        setAutoChange(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
        setAutoChange(false);
    };

    const handlePlay = (videoUrl) => {
        setCurrentVideo(videoUrl);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentVideo(null);
    };

    const currentTestimonial = reviewData[currentIndex];

    return (
        <div className="w-11/12 lg:mt-28 mt-28 mx-auto">
            <Helmet>
                <title>Amar Thikana | Client Review</title>
            </Helmet>
      <ClientReviewHome></ClientReviewHome>
            
        </div>
    );
}

export default ClientReviewDropDown;
