import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const BookingFromDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const { data: singleBookingFrom = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['singleBookingFrom'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booking-form/${id}`);
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data</p>;
    refetch();

    return (
        <div>
            <Helmet>
                <title>Amar Thikana | Booking From Details</title>
            </Helmet>
            <div className="bg-green-50 min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
                        আমার ঠিকানা - বুকিং ফর্ম
                    </h2>

                    <form onSubmit={"handleSubmit"} className="space-y-6">
                        {/* আবেদনকারীর নাম */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    আবেদনকারীর নাম
                                </label>
                                <input
                                    type="text"
                                    placeholder="আবেদনকারীর নাম"
                                    defaultValue={singleBookingFrom?.name}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* English Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    English Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="English Name"
                                    name='englishName'
                                    defaultValue={singleBookingFrom?.englishName}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        {/* আবেদনকারীর ছবি*/}
                        <div className='w-1/2' >
                            <label className="block text-sm font-medium text-gray-700">
                                আবেদনকারীর ছবি
                            </label>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src={singleBookingFrom?.image} />
                                </div>
                            </div>
                        </div>

                        {/* পিতার নাম */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    পিতার নাম
                                </label>
                                <input
                                    type="text"
                                    placeholder="পিতার নাম"
                                    name='parentName'
                                    defaultValue={singleBookingFrom?.parentName}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* মাতার নাম */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    মাতার নাম
                                </label>
                                <input
                                    type="text"
                                    placeholder="মাতার নাম"
                                    name="motherName"
                                    defaultValue={singleBookingFrom?.motherName}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        {/* বর্তমান ঠিকানা */}
                        <div className='flex flex-col lg:flex-row gap-6 ' >
                            <div className='flex-1' >
                                <label className="block text-sm font-medium text-gray-700">
                                    বর্তমান ঠিকানা
                                </label>
                                <input
                                    type="text"
                                    placeholder="বর্তমান ঠিকানা"
                                    name='presentAddress'
                                    defaultValue={singleBookingFrom?.presentAddress}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div className='flex-1 ' >
                                <label className="block text-sm font-medium text-gray-700">
                                    স্থায়ী ঠিকানা
                                </label>
                                <input
                                    type="text"
                                    name='permanentAddress'
                                    placeholder="স্থায়ী ঠিকানা"
                                    defaultValue={singleBookingFrom?.permanentAddress}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        {/* Contact Information */}
                        {/* মোবাইল নম্বর */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    মোবাইল নম্বর
                                </label>
                                <input
                                    type="tel"
                                    placeholder="মোবাইল নম্বর"
                                    name='mobileNumber'
                                    defaultValue={singleBookingFrom?.mobileNumber}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* বাসার মোবাইল নাম্বার */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    বাসার মোবাইল নাম্বার
                                </label>
                                <input
                                    type="tel"
                                    placeholder="বাসার মোবাইল নাম্বার"
                                    name='homeMobileNumber'
                                    defaultValue={singleBookingFrom?.homeMobileNumber}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* জন্ম তারিখ/বয়স */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    জন্ম তারিখ/বয়স
                                </label>
                                <input
                                    type="text"
                                    placeholder="জন্ম তারিখ/বয়স"
                                    name='birthDate'
                                    defaultValue={singleBookingFrom?.birthDate}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* ফ্যাক্স/ ই-মেইল */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    ফ্যাক্স/ ই-মেইল
                                </label>
                                <input
                                    type="email"
                                    placeholder="ফ্যাক্স/ ই-মেইল"
                                    name='emailFax'
                                    defaultValue={singleBookingFrom?.emailFax}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* ধর্ম*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    ধর্ম
                                </label>
                                <input
                                    type="text"
                                    name='religion'
                                    defaultValue={singleBookingFrom?.religion}
                                    readOnly
                                    placeholder="ধর্ম"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* জাতীয়তা*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    জাতীয়তা
                                </label>
                                <input
                                    type="text"
                                    name='nationality'
                                    placeholder="জাতীয়তা"
                                    defaultValue={singleBookingFrom?.nationality}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>
                        <div className=' lg:grid lg:grid-cols-2 gap-5 ' >
                            {/* জাতীয় পরিচয় পত্রের নম্বর/ পাসর্পোট নম্বর/ টিন নম্বর (যেকোনো একটি)  */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    জাতীয় পরিচয় পত্রের নম্বর/ পাসর্পোট নম্বর/ টিন নম্বর (যেকোনো একটি)
                                </label>
                                <input
                                    type="text"
                                    name='nationalIdCardNo'
                                    defaultValue={singleBookingFrom?.nationalIdCardNo}
                                    readOnly
                                    placeholder="জাতীয় পরিচয় পত্রের নম্বর/ পাসর্পোট নম্বর/ টিন নম্বর (যেকোনো একটি"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* পেশা */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    পেশা
                                </label>
                                <input
                                    type="text"
                                    name='profassion'
                                    placeholder="পেশা"
                                    defaultValue={singleBookingFrom?.profassion}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* অফিসের ঠিকান */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    অফিসের ঠিকানা
                                </label>
                                <input
                                    type="text"
                                    name='officeAddress'
                                    defaultValue={singleBookingFrom?.officeAddress}
                                    readOnly
                                    placeholder="অফিসের ঠিকানা"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/* ফোন নম্বর */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    ফোন নম্বর
                                </label>
                                <input
                                    type="text"
                                    name='phoneNumber'
                                    defaultValue={singleBookingFrom?.phoneNumber}
                                    readOnly
                                    placeholder="ফোন নম্বর"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* গ্রুপ মেম্বারদের নাম */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    গ্রুপ মেম্বারদের নাম
                                </label>
                                <input
                                    type="text"
                                    name='groupMembersName'
                                    defaultValue={singleBookingFrom?.groupMembersName}
                                    readOnly
                                    placeholder="গ্রুপ মেম্বারদের নাম"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/* কোড নং */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    কোড নং
                                </label>
                                <input
                                    type="text"
                                    name='codeNo'
                                    defaultValue={singleBookingFrom?.codeNo}
                                    readOnly
                                    placeholder="কোড নং"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* গ্রুপ লিডারের নাম */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    গ্রুপ লিডারের নাম
                                </label>
                                <input
                                    type="text"
                                    name='groupLeadersName'
                                    defaultValue={singleBookingFrom?.groupLeadersName}
                                    readOnly
                                    placeholder="গ্রুপ লিডারের নাম"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* নমিনির নাম */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    নমিনির নাম
                                </label>
                                <input
                                    type="text"
                                    name='nameOfNomoni'
                                    defaultValue={singleBookingFrom?.nameOfNomoni}
                                    readOnly
                                    placeholder="নমিনির নাম"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/* নমিনির ছবি */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    নমিনির ছবি
                                </label>
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                        <img src={singleBookingFrom?.imgOfNomoni} />
                                    </div>
                                </div>
                            </div>
                            {/*English name of nomone*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    English Name
                                </label>
                                <input
                                    type="text"
                                    name="englishNameNomoni"
                                    defaultValue={singleBookingFrom?.englishNameNomoni}
                                    readOnly
                                    placeholder="নমিনির ইংরেজী নাম"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/*জাতীয় পরিচয় পত্র নং*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    জাতীয় পরিচয় পত্র নং
                                </label>
                                <input
                                    type="text"
                                    name="nationalIdCardNoNomoni"
                                    defaultValue={singleBookingFrom?.nationalIdCardNoNomoni}
                                    readOnly
                                    placeholder="জাতীয় পরিচয় পত্র নং"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/*ঠিকান*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    ঠিকান
                                </label>
                                <input
                                    type="text"
                                    name="thikana"
                                    defaultValue={singleBookingFrom?.thikana}
                                    readOnly
                                    placeholder="ঠিকান"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <div className='lg:grid lg:grid-cols-3 gap-4 ' >
                            {/* সম্পর্ক */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    সম্পর্ক
                                </label>
                                <input
                                    type="text"
                                    name="relation"
                                    defaultValue={singleBookingFrom?.relation}
                                    readOnly
                                    placeholder="সম্পর্ক"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/*রোড */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    রোড
                                </label>
                                <input
                                    type="text"
                                    name="roadNo"
                                    defaultValue={singleBookingFrom?.roadNo}
                                    readOnly
                                    placeholder="রোড"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* ব্লক */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    ব্লক
                                </label>
                                <input
                                    type="text"
                                    name="block"
                                    defaultValue={singleBookingFrom?.block}
                                    readOnly
                                    placeholder="ব্লক"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <div className='lg:grid lg:grid-cols-3 gap-4 ' >
                            {/* প্রকল্পের নাম */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    প্রকল্পের নাম
                                </label>
                                <input
                                    type="text"
                                    name="projectName"
                                    defaultValue={singleBookingFrom?.projectName}
                                    readOnly
                                    placeholder="প্রকল্পের নাম"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/*জমির পরিমাণ */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    জমির পরিমাণ
                                </label>
                                <input
                                    type="text"
                                    name="amounLand"
                                    defaultValue={singleBookingFrom?.amounLand}
                                    readOnly
                                    placeholder="জমির পরিমাণ"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/* প্রতি কাঠার মুল্য */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    প্রতি কাঠার মুল্য
                                </label>
                                <input
                                    type="text"
                                    name="pricePerKhata"
                                    defaultValue={singleBookingFrom?.pricePerKhata}
                                    readOnly
                                    placeholder="প্রতি কাঠার মুল্য"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>



                        <div className='lg:grid lg:grid-cols-2 gap-4 ' >
                            {/* প্লট নম্বর */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    প্লট নম্বর
                                </label>
                                <input
                                    type="text"
                                    name="plotName"
                                    defaultValue={singleBookingFrom?.plotName}
                                    readOnly
                                    placeholder="প্লট নম্বর"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/*টাকা কথায় */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    টাকা কথায়
                                </label>
                                <input
                                    type="text"
                                    name="moneySpeack"
                                    defaultValue={singleBookingFrom?.moneySpeack}
                                    readOnly
                                    placeholder="টাকা কথায়"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <div className='lg:grid lg:grid-cols-2 gap-5' >
                            {/*সেক্টর */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    সেক্টর
                                </label>
                                <input
                                    type="text"
                                    name="sector"
                                    defaultValue={singleBookingFrom?.sector}
                                    readOnly
                                    placeholder="সেক্টর"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/*সর্বমোট মুল্য */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    সর্বমোট মুল্য
                                </label>
                                <input
                                    type="text"
                                    name="totalAmount"
                                    defaultValue={singleBookingFrom?.totalAmount}
                                    readOnly
                                    placeholder="সর্বমোট মুল্য"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <div className='lg:grid lg:grid-cols-2 gap-5 ' >
                            {/*মুল্য পরিশোধের ধরণ */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    মুল্য পরিশোধের ধরণ
                                </label>
                                <input
                                    type="text"
                                    name="paymentMethod"
                                    defaultValue={singleBookingFrom?.paymentMethod}
                                    readOnly
                                    placeholder="মুল্য পরিশোধের ধরণ"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/*মাসিক কিস্তির পরিমাণ */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    মাসিক কিস্তির পরিমাণ
                                </label>
                                <input
                                    type="text"
                                    name="monthlyInsallmentAmount"
                                    defaultValue={singleBookingFrom?.monthlyInsallmentAmount}
                                    readOnly
                                    placeholder="মাসিক কিস্তির পরিমাণ"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>


                        <div className='lg:grid lg:grid-cols-2 gap-5 ' >
                            {/*তারিখ */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    তারিখ
                                </label>
                                <input
                                    type="date"
                                    name="paymentMethodDate"
                                    defaultValue={singleBookingFrom?.paymentMethodDate}
                                    readOnly
                                    placeholder="তারিখ"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/*ক্যাশ/চেক/পে-অর্ডার নম্বর*/}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    ক্যাশ/চেক/পে-অর্ডার নম্বর
                                </label>
                                <input
                                    type="date"
                                    name="checkNo"
                                    defaultValue={singleBookingFrom?.checkNo}
                                    readOnly
                                    placeholder="ক্যাশ/চেক/পে-অর্ডার নম্বর"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <div className='lg:grid lg:grid-cols-2 gap-5 ' >
                            {/*বুকিং  মানির পরিমাণ */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    বুকিং  মানির পরিমাণ
                                </label>
                                <input
                                    type="text"
                                    name="bookingAmountMoney"
                                    defaultValue={singleBookingFrom?.bookingAmountMoney}
                                    readOnly
                                    placeholder="বুকিং  মানির পরিমাণ"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/* ব্রাঞ্চ  */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    ব্রাঞ্চ
                                </label>
                                <input
                                    type="text"
                                    name="branchName"
                                    defaultValue={singleBookingFrom?.branchName}
                                    readOnly
                                    placeholder=" ব্রাঞ্চ  "
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <div className='lg:grid lg:grid-cols-2 gap-5 ' >
                            {/*ব্যাংকের নাম */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    ব্যাংকের নাম
                                </label>
                                <input
                                    type="text"
                                    name="bankName"
                                    defaultValue={singleBookingFrom?.bankName}
                                    readOnly
                                    placeholder="ব্যাংকের নাম"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/* মাসিক কিস্তির সংখ্যা  */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    মাসিক কিস্তির সংখ্যা
                                </label>
                                <input
                                    type="text"
                                    name="monthlyInstallment"
                                    defaultValue={singleBookingFrom?.monthlyInstallment}
                                    readOnly
                                    placeholder=" মাসিক কিস্তির সংখ্যা  "
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <div className='lg:grid lg:grid-cols-2 gap-5 ' >
                            {/* ডাউন পেমেন্ট পরিমাণ */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    ডাউন পেমেন্ট পরিমাণ
                                </label>
                                <input
                                    type="text"
                                    placeholder="downPaymentAmount"
                                    name="downPaymentAmount"
                                    defaultValue={singleBookingFrom?.downPaymentAmount}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/* মাসিক কিস্তির শুরুর তারিখ  */}
                            <div className='' >
                                <label className="block text-sm font-medium text-gray-700">
                                    মাসিক কিস্তির শুরুর তারিখ
                                </label>
                                <input
                                    type="date"
                                    name="monthlyInstallmentDate"
                                    defaultValue={singleBookingFrom?.monthlyInstallmentDate}
                                    readOnly
                                    placeholder=" মাসিক কিস্তির শুরুর তারিখ  "
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingFromDetails
