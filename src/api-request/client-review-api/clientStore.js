
import { create } from 'zustand';
import useAxiosPublic from './../../hooks/useAxiosPublic';

const axiosPublic = useAxiosPublic();

const clientReviewStore = create((set) => ({
    clientReviewDataList: [],
    clientReviewDataListApi: async () => {
        try {
            const res = await axiosPublic.get('/client-review');
            set({ clientReviewDataList: res.data });
        } catch (error) {
            console.log(error);
        }
    }
}));


export default clientReviewStore;