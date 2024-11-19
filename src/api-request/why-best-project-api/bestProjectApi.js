import { create } from "zustand";
import useAxiosPublic from './../../hooks/useAxiosPublic';

const axiosPublic = useAxiosPublic();

const bestProjectStore = create((set) => ({
    bestProjectsData: [],
    bestProjectsApi: async () => {
        try {
            const res = await axiosPublic.get('/best-project');
            set({ bestProjectsData: res.data });
        } catch (error) {
            console.log(error);
        }
    },
    bestProjectsDelete : async (id)=>{
        try {
            let res = await axiosPublic.delete(`/best-project/${id}`);
            console.log(res);
            if(res.data.deletedCount === 1){
                return true;
            }
        } catch (error) {
            console.log(error);
        }
    }
}));

export default bestProjectStore;