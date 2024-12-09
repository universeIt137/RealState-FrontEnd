import React from "react";
import BlockB from "./BlockB";
import BlockC from "./BlockC";
import BlockD from "./BlockD";
import BlockE from "./BlockE";
import BlockA from "./BlockA";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const PlotPricingTable = () => {
    window.scrollTo(0, 0);

    const axiosPublic = useAxiosPublic();
    const { data: allData = [] } = useQuery({
        queryKey: ['all Data'],
        queryFn: async () => {
            const res = await axiosPublic('/project-price');
            return res.data;
        }
    })

    console.log(allData);

    return (
        <div className="w-11/12 mx-auto my-24 " >
            <Helmet>
                <title>Amar Thikana | Plot Pricing List</title>
            </Helmet>
            <div className="bg-green-50  flex items-center ">
                <div className=" overflow-hidden w-full ">
                    {/* Header */}
                    <div className="bg-green-700 text-center mb-5 mt-5">
                        <h1 className="lg:text-4xl   font-bold">আমার ঠিকানা গ্রিন সিটি </h1>
                        <h3 className="lg:text-2xl text-[11px] font-semibold mt-2  ">
                            মেয়াদ অনুযায়ী প্রজেক্টের মূল্য তালিকা
                        </h3>
                    </div>

                    {/* Table */}

                    {
                        allData?.map(content =>
                            <div key={content?._id}>
                            <BlockA content={content}></BlockA>
                        </div>)

                    }
                    
                    
                   
                </div>
            </div>
        </div>
    );
};

export default PlotPricingTable;
