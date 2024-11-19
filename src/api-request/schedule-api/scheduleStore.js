
import { create } from 'zustand';
import useAxiosPublic from './../../hooks/useAxiosPublic';
const useAxios = useAxiosPublic();

const scheduleStore = create((set)=>({
    scheduleCreateApi : async (payload)=>{
        try {
            let res = await useAxios.post('/schedule', payload);
            console.log(res);
            return true;
        } catch (error) {
            console.error(error);
        }
    },
    scheduleDataList : [],
    scheduleDataListApi : async ()=>{
        try {
            let res = await useAxios(`schedule`);
            set({ scheduleDataList : res.data });
        } catch (error) {
            console.error(error);
        }
    },
    statusUpdateApi : async (id)=>{
        try {
            let res = await useAxios.put(`/schedule-status-update/${id}`);
            console.log(res);
            return true;
        } catch (error) {
            console.error(error);
        }
    },
    scheduleDeleteApi : async (id)=>{
        try {
            let res = await useAxios.delete(`/schedule/${id}`);
            console.log(res);
            return true;
        } catch (error) {
            console.error(error);
        }
    }
}));

export default scheduleStore;