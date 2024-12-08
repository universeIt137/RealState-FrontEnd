import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const ShowPlotPrice = () => {

    const { id } = useParams();
    const { data: content = {} } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await useAxiosPublic.get(`/project-price/${id}`);
            return res.data;
        }
    })

    console.log(content);

    return (
        <div>
            <Helmet>
                <title>Dashboard | Preview Price</title>
            </Helmet>
            <div className="overflow-x-auto ">
                <table className="table-auto text-justify w-full border border-gray-200">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-green-100 bg-red-500 text-white text-sm">
                            <th className="px-4 py-2 border">ব্লক { content?.blockCategory}</th>
                            <th className="px-4 py-2 border">৫ বছর মেয়াদে</th>
                            <th className="px-4 py-2 border">৭ বছর মেয়াদে</th>
                            <th className="px-4 py-2 border">১০ বছর মেয়াদে</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {/* Row 1 */}
                        <tr className="bg-white text-sm font-semibold">
                            <td className="px-4 py-2 border  font-bold text-green-700">
                                উত্তরমুখী প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className="px-4 py-2   border">১২,০০,০০০/-</td>
                            <td className="px-4 py-2  border">১৩,০০,০০০/-</td>
                            <td className="px-4 py-2  border">১৪,০০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 2 */}
                        <tr className="bg-white text-sm font-semibold">
                            <td className="px-4 py-2 border  font-bold text-green-700">
                                দক্ষিণমুখী প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className="px-4 py-2  border">১৩,০০,০০০/-</td>
                            <td className="px-4 py-2  border">১৪,০০,০০০/-</td>
                            <td className="px-4 py-2  border">১৫,০০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 3 */}
                        <tr className="bg-white font-semibold ">
                            <td className="px-4 py-2 border  font-bold text-green-700">
                                উত্তরমুখী ৪০ ফিট কর্নার প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className="px-4 py-2  border">১৬,০০,০০০/-</td>
                            <td className="px-4 py-2   border">১৭,০০,০০০/-</td>
                            <td className="px-4 py-2   border">১৮,০০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 4 */}
                        <tr className="bg-white font-semibold ">
                            <td className="px-4 py-2 border  font-bold text-green-700">
                                দক্ষিণমুখী ৪০ ফিট কর্নার প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className="px-4 py-2  border">১৭,০০,০০০/-</td>
                            <td className="px-4 py-2   border">১৮,০০,০০০/-</td>
                            <td className="px-4 py-2   border">১৯,০০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 3 */}
                        <tr className="bg-white font-semibold ">
                            <td className="px-4 py-2 border px-4 font-bold text-green-700">
                                কাঠার উত্তরমুখী রিভার ভিউ প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className=" py-2 px-4  border">১৮,০০,০০০/-</td>
                            <td className=" py-2 px-4  border">১৯,০০,০০০/-</td>
                            <td className=" py-2 px-4  border">২০,০০,০০০/-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowPlotPrice
