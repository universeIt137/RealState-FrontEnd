import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const BankInfoListN = () => {
    const axiosPublic = useAxiosPublic();
    const { data: bankInfoList = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['bankInfoList'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bank-info');
            return res.data;
        }
    });
    return (
        <div className='w-11/12 mx-auto my-24  ' >
            <Helmet>
                <title>Amar Thikana | Bank Details </title>
            </Helmet>
            <div className="flex justify-center gap-4 items-center ">
                {
                    bankInfoList.map((item, i) => {
                        return (
                            <div key={i} >
                                <div className=" bg-white rounded-lg  shadow-lg p-6">
                                    {/* Bank Icon */}
                                    <div className="flex justify-center mb-6">
                                        <img
                                            src={item?.image}
                                            alt="Bank Icon"
                                            className="w-16 h-16"
                                        />
                                    </div>
                                    {/* Title */}
                                    {/* <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
                                        Bank A/C Details of RHDO
                                    </h2> */}
                                    {/* Bank Details */}
                                    <div className="text-gray-700">
                                        <p className="mb-2">
                                            <span className="font-bold">Account Name: </span>
                                            {
                                                item?.accountName
                                            }
                                        </p>
                                        {
                                            item?.mobileNumber ? <>
                                                <p className="mb-2">
                                                    <span className="font-bold">Account Number: </span>
                                                    <span className="bg-gray-200 px-2 py-1 rounded">
                                                        {
                                                            item?.mobileNumber
                                                        }
                                                    </span>
                                                </p>
                                            </> : <>
                                                <p className="mb-2">
                                                    <span className="font-bold">Account Number: </span> {
                                                        item?.accountNumber
                                                    }
                                                </p>
                                                <p className="mb-2">
                                                    <span className="font-bold">Bank Name: </span>{
                                                        item?.bankName

                                                    }
                                                </p>
                                                <p className="mb-2">
                                                    <span className="font-bold">Type of Account: </span>
                                                    {
                                                        item?.accountType

                                                    }
                                                </p>
                                                <p className="mb-2">
                                                    <span className="font-bold">Branch Name: </span>
                                                    {
                                                        item?.branchName
                                                    }
                                                </p>
                                                <p className="mb-2">
                                                    <span className="font-bold">Routing Number: </span>
                                                    <span className="bg-gray-200 px-2 py-1 rounded">
                                                        {
                                                            item?.routingNumber
                                                        }
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="font-bold">SWIFT Codes: </span>
                                                    <span className="bg-gray-200 px-2 py-1 rounded">
                                                        {
                                                            item?.swiftCode
                                                        }

                                                    </span>
                                                </p>
                                            </>
                                        }

                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BankInfoListN
