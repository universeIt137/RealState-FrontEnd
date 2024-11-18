
import { create } from 'zustand';
import useAxiosPublic from './../hooks/useAxiosPublic';
const axiosPublic = useAxiosPublic();

const aboutUsStore = create((set)=>({
    aboutUsSApi : [],
    aboutUsData : async ()=>{
        const res = await axiosPublic.get('/about-us');
        set({ aboutUsSApi : res.data });
    }
}));

export default aboutUsStore;