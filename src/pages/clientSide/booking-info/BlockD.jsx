import React from "react";

const BlockD = () => {
    return (
        <div className=" " >
            {/* Table */}
            <div className="overflow-x-auto ">
                <table className="table-auto w-full text-justify border border-gray-200">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-green-100 bg-red-500 text-white text-sm">
                            <th className="px-4 py-2 border">ব্লক "ডি"</th>
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
                            <td className="px-4 py-2  border">৫,৫০,০০০/-</td>
                            <td className="px-4 py-2  border">৬,৫০,০০০/-</td>
                            <td className="px-4 py-2  border">৭,৫০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 2 */}
                        <tr className="bg-white text-sm font-semibold">
                            <td className="px-4 py-2 border  font-bold text-green-700">
                                দক্ষিণমুখী প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className="px-4 py-2  border">৬,৫০,০০০/-</td>
                            <td className="px-4 py-2  border">৭,৫০,০০০/-</td>
                            <td className="px-4 py-2  border">৮,৫০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 3 */}
                        <tr className="bg-white font-semibold ">
                            <td className="px-4 py-2 border  font-bold text-green-700">
                                উত্তরমুখী ৪০ ফিট কর্নার প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className="px-4 py-2  border">৮,৫০,০০০/-</td>
                            <td className="px-4 py-2   border">৯,৫০,০০০/-</td>
                            <td className="px-4 py-2   border">১০,৫০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 4 */}
                        <tr className="bg-white font-semibold ">
                            <td className="px-4 py-2 border  font-bold text-green-700">
                                দক্ষিণমুখী ৪০ ফিট কর্নার প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className="px-4 py-2  border">৯,৫০,০০০/-</td>
                            <td className="px-4 py-2   border">১০,৫০,০০০/-</td>
                            <td className="px-4 py-2   border">১১,৫০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 3 */}
                        <tr className="bg-white font-semibold ">
                            <td className="px-4 py-2 border px-4 font-bold text-green-700">
                                দক্ষিণমুখী  উত্তরমুখী ৮০ ফিট কর্নার প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className=" py-2 px-4  border">১১,৫০,০০০/-</td>
                            <td className=" py-2 px-4  border">১২,৫০,০০০/-</td>
                            <td className=" py-2 px-4  border">১৩,৫০,০০০/-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {/* Row 6 */}
                        <tr className="bg-white font-semibold ">
                            <td className="px-4 py-2 border  font-bold text-green-700">
                                দক্ষিণমুখী ৬০ ফিট কমার্শিয়াল প্লটের প্রতি কাঠার মূল্য
                            </td>
                            <td className="px-4 py-2   border">১৫,০০,০০০/-</td>
                            <td className="px-4 py-2   border">১৬,০০,০০০/-</td>
                            <td className="px-4 py-2   border">১৭,০০,০০০/-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlockD;
