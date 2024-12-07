import React from 'react'

const DynamicBookingFrom = () => {
    return (
        <div className='my-16' >
            <div className="bg-green-50 min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
                        আমার ঠিকানা - বুকিং ফর্ম
                    </h2>

                    <form className="space-y-6">
                        {/* আবেদনকারীর নাম */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    আবেদনকারীর নাম
                                </label>
                                <input
                                    type="text"
                                    placeholder="আবেদনকারীর নাম"
                                    name='name'
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
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>

                        {/* আবেদনকারীর ছবি*/}
                        <div className='w-1/2' >
                            <label className="block text-sm font-medium text-gray-700">
                            আবেদনকারীর ছবি
                            </label>
                            <input
                                type="file"
                                placeholder="আবেদনকারীর ছবি"
                                name='image'
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
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
                                    placeholder="নমিনির নাম"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>

                            {/* নমিনির ছবি */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    নমিনির ছবি
                                </label>
                                <input
                                    type="file"
                                    name='imgOfNomoni'
                                    placeholder="নমিনির ছবি"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            {/*English name of nomone*/}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    English Name
                                </label>
                                <input
                                    type="text"
                                    name="englishNameNomoni"
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
                                    name="nationalIdCardNo"
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
                                    placeholder="টাকা কথায়"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>
                        {/*সেক্টর */}
                        <div className='w-1/2' >
                            <label className="block text-sm font-medium text-gray-700">
                                সেক্টর
                            </label>
                            <input
                                type="text"
                                name="sector"
                                placeholder="সেক্টর"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>

                        {/*সর্বমোট মুল্য */}
                        <div className='w-1/2' >
                            <label className="block text-sm font-medium text-gray-700">
                                সর্বমোট মুল্য
                            </label>
                            <input
                                type="text"
                                name="totalAmount"
                                placeholder="সর্বমোট মুল্য"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
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
                                    name="paymentMethod"
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
                                    name="bankName"
                                    placeholder="downPaymentAmount"
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
                                    placeholder=" মাসিক কিস্তির শুরুর তারিখ  "
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>











                        {/* Submission */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 text-white font-bold text-[17px] px-6 py-2 rounded-md hover:bg-green-800"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DynamicBookingFrom
