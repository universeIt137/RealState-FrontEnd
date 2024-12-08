import React, { useState } from 'react';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { createAlert } from '../../../helper/createAlert';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { updateAlert } from '../../../helper/updateAlert';

const BankInfoUpdate = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { data: singleBankInfo = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['singleBankInfo'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bank-info/${id}`);
            return res.data;
        }
    });
    const { image: upcommingImgUrl } = singleBankInfo;

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const accountName = e.target.accountName.value;
        const accountNumber = e.target.accountNumber.value;
        const bankName = e.target.bankName.value;
        const accountType = e.target.accountType.value;
        const branchName = e.target.branchName.value;
        const routingNumber = e.target.routingNumber.value;
        const swiftCode = e.target.swiftCode.value;
        const image = e.target.image.files[0];

        // image url

        let imageUrl = upcommingImgUrl;
        if (!image?.name) {
            imageUrl = upcommingImgUrl;
        } else {
            imageUrl = await uploadImg(image);
        }

        const payload = {
            accountName,
            accountNumber,
            bankName,
            accountType,
            branchName,
            routingNumber,
            swiftCode,
            image: imageUrl
        };

        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                setLoading(true);
                let res = await axiosPublic.put(`/bank-info/${id}`, payload);
                setLoading(false);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Bank account details has been updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                    refetch();
                }
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed to update bank account",
                showConfirmButton: false,
                timer: 1500
            })
        }


    }

    return (
        <div className=" mx-auto bg-white shadow-md rounded-md p-6 mt-10">
            <Helmet>
                <title>Dashboard | Bank Information Update</title>
            </Helmet>
            <h2 className="lg:text-4xl font-bold text-center mb-10">
                Bank Information Update
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img src={ singleBankInfo?.image } />
                    </div>
                </div>
                <div className=' grid grid-cols-2 gap-10  ' >
                    {/* Img */}
                    <div>
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Img
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    {/* Account Name */}
                    <div>
                        <label
                            htmlFor="accountName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Account Name
                        </label>
                        <input
                            type="text"
                            id="accountName"
                            name="accountName"
                            defaultValue={singleBankInfo?.accountName}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter Account Name"
                        />
                    </div>

                    {/* Account Number */}
                    <div>
                        <label
                            htmlFor="accountNumber"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Account Number
                        </label>
                        <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            defaultValue={singleBankInfo?.accountNumber}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter Account Number"
                        />
                    </div>

                    {/* Bank Name */}
                    <div>
                        <label
                            htmlFor="bankName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Bank Name
                        </label>
                        <input
                            type="text"
                            id="bankName"
                            name="bankName"
                            defaultValue={singleBankInfo?.bankName}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter Bank Name"
                        />
                    </div>

                    {/* Account Type */}
                    <div>
                        <label
                            htmlFor="accountType"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Type of Account
                        </label>
                        <select
                            id="accountType"
                            name="accountType"
                            defaultValue={singleBankInfo?.accountType}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="">Select Account Type</option>
                            <option value="Current Account">Current Account</option>
                            <option value="Savings Account">Savings Account</option>
                        </select>
                    </div>

                    {/* Branch Name */}
                    <div>
                        <label
                            htmlFor="branchName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Branch Name
                        </label>
                        <input
                            type="text"
                            id="branchName"
                            name="branchName"
                            defaultValue={singleBankInfo?.branchName}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter Branch Name"
                        />
                    </div>

                    {/* Routing Number */}
                    <div>
                        <label
                            htmlFor="routingNumber"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Routing Number
                        </label>
                        <input
                            type="text"
                            id="routingNumber"
                            name="routingNumber"
                            defaultValue={singleBankInfo?.routingNumber}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter Routing Number"
                        />
                    </div>

                    {/* SWIFT Code */}
                    <div>
                        <label
                            htmlFor="swiftCode"
                            className="block text-sm font-medium text-gray-600"
                        >
                            SWIFT Code
                        </label>
                        <input
                            type="text"
                            id="swiftCode"
                            name="swiftCode"
                            defaultValue={singleBankInfo?.swiftCode}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter SWIFT Code"
                        />
                    </div>
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className=" px-4 text-white py-2 bg-[#21C45E] font-semibold rounded-md hover:bg-green-700"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default BankInfoUpdate;
