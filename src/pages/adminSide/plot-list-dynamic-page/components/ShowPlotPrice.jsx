import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const ShowPlotPrice = () => {

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: content = {} } = useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/project-price/${id}`);
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
                            <th className="px-4 py-2 border">ব্লক {`" ${ content?.blockCategory} "` }</th>
                            <th className="px-4 py-2 border">৫ বছর মেয়াদে</th>
                            <th className="px-4 py-2 border">৭ বছর মেয়াদে</th>
                            <th className="px-4 py-2 border">১০ বছর মেয়াদে</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {/* Row 1 */}
                        {
                            content?.contents?.map((singleData => <tr key={singleData?._id} className="bg-white text-sm font-semibold">
                                <td className="px-4 py-2 border  font-bold text-green-700">
                                    {singleData?.content_name}
                                </td>
                                <td className="px-4 py-2   border">{ singleData?.price_5 }/-</td>
                                <td className="px-4 py-2  border">{ singleData?.price_7 }/-</td>
                                <td className="px-4 py-2  border">{ singleData?.price_10 }/-</td>
                            </tr>))
                        }
                    </tbody>            
                </table>
            </div>
        </div>
    )
}

export default ShowPlotPrice
