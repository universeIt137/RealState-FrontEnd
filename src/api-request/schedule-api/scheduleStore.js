
import { create } from 'zustand';
import useAxiosPublic from './../../hooks/useAxiosPublic';
const useAxios = useAxiosPublic();

const scheduleStore = create((set)=>({
    scheduleCreateApi : async (payyload)=>{
        
    }
}))