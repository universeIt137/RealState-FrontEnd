

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CustomMarquee = () => {
    const axiosPublic = useAxiosPublic();
    // const { data: blogs = [], refetch, isLoading } = useQuery({
    //     queryKey: ['blogs'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/blog');
    //         return res.data;
    //     }
    // });
    const blogs = ["sd", "dsdf", "asdfas", "sdfasd"];
    return (
        <div className="px-2 sm:px-10 md:px-20 lg:mt-20">
            <div className="relative text-black font-bold text-xl lg:text-4xl text-center bg-white">
                
                <div className="" style={{ position: "relative" }}>
                    
                </div>
            </div>
            <Marquee speed={35} pauseOnHover={true}>
                <div className="flex gap-5 lg:gap-10" style={{ position: "relative" }}>

                    {blogs.map((blog, index) => (
                        <div key={index} className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>

            <div className="lg:py-5 pb-2 lg:text-xl mt-2 text-[10px] flex lg:hidden justify-center items-center">
                <Link to="/blogs">
                    <button className="lg:p-3 p-1 rounded-lg bg-primary text-white hover:text-black  active:bg-white-700 focus:outline-none focus:ring focus:ring-red-300 focus:text-white w-max mr-9 lg:mr-0">
                        See more
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CustomMarquee;
