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
    bestProjectsDelete: async (id) => {
        try {
            let res = await axiosPublic.delete(`/best-project/${id}`);
            if (res.data.deletedCount === 1) {
                return true
            }
        } catch (error) {
            console.log(error);
        }
    },
    singleBestProjectData: [],
    singleBestProjectApi: async (id) => {
        try {
            let res = await axiosPublic.get(`/best-project/${id}`);
            set({ singleBestProjectData: res.data });
        } catch (error) {
            console.log(error);
        }
    },
    bestProjectsUpdate: async (id, data) => {
        try {
            let res = await axiosPublic.put(`/best-project/${id}`, data);
            return true;
        } catch (error) {
            console.log(error);
        }
    },
}));

export default bestProjectStore;