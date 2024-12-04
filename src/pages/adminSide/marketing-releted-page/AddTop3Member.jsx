import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddTop3Member = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch marketing members
    const { data: members = [], refetch } = useQuery({
        queryKey: ["members"],
        queryFn: async () => {
            const res = await axiosPublic.get("/marketing");
            return res.data;
        },
    });

    const [loading, setLoading] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null); // To store selected member info

    const handleMemberChange = (e) => {
        const memberId = e.target.value;
        console.log("member id", memberId);
        const memberInfo = members.find((member) => member._id === memberId);
        console.log(memberInfo);
        setSelectedMember(memberInfo); // Save the selected member's info
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const month = form.month.value;
        const position = form.position.value;
        console.log("from submit", selectedMember);

        try {
            const data = {
                month,
                position,
                member: selectedMember, // Include the selected member's info
            };

            console.log("Submitting Data:", data);

            const res = await axiosPublic.post(`/top3`, data);
            if (res.status === 200) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Data has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch();
            }
        } catch (error) {
            console.error("Error submitting form:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-10/12 mx-auto p-4">
            <Helmet>
                <title>Dashboard | Manage Top 3</title>
            </Helmet>
            <h2 className="text-2xl font-semibold mb-4">Select Top 3 Marketing Members</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {loading && <p className="text-blue-500">Uploading data...</p>}

                <div className="grid lg:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="month">Month</label>
                        <input
                            type="text"
                            name="month"
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            name="position"
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="member">Select Member</label>
                        <select
                            name="member"
                            onChange={handleMemberChange}
                            className="select border border-green w-full"
                            required
                        >
                            <option disabled selected>
                                Select a Member
                            </option>
                            {members.map((member) => (
                                <option key={member._id} value={member._id}>
                                    {member.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="w-1/4 mx-auto">
                    <button
                        type="submit"
                        className="w-full py-2 bg-green text-white rounded-md"
                    >
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTop3Member;
