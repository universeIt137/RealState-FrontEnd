import React, { useState, useRef } from 'react';

import { IoPlayCircleSharp } from 'react-icons/io5';

import ReactPlayer from 'react-player';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ChairmanSpeech from '../../pages/clientSide/home-page/ChairmanSpeech';

const ChairmanSpeachDrop = () => {
  window.scrollTo(0, 0);
  return (
    <>
     <ChairmanSpeech></ChairmanSpeech>
    </>
  );
};

export default ChairmanSpeachDrop;
