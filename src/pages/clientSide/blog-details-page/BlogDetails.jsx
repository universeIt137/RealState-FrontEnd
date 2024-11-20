import React from 'react'
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const BlogDetails = () => {
    window.scrollTo(0, 0);

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: blog = {} } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/csr/${id}`);
            return res.data;
        }
    })

    const { data: blogs = [] } = useQuery({
        queryKey: ['blogData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/csr`);
            return res.data;
        }
    })


    return (
        <div className=' w-11/12 mx-auto mt-20 lg:mt-18 ' >
            <div className=" min-h-screen flex items-center justify-center">
                <div className="flex flex-col lg:gap-14 lg:flex-row lg:justify-between ">
                    {/* Main Image Section */}
                    <div className="flex-1">
                        <img
                            src={blog?.BannerImageUrl}
                            alt="Main Content"
                            className="w-full lg:h-[70vh] rounded-lg shadow-md"
                        />

                        <div className="my-5">
                            <p className="text-xl lg:text-4xl font-bold">{blog?.title}</p>
                            <p className="lg:text-xl mt-3">
                                {blog?.description}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="flex-none w-full lg:w-1/4 mt-6 md:mt-0 md:ml-6">
                        <h2 className="text-xl font-semibold mb-4">Another Blogs</h2>
                        <div className="space-y-4">
                            {blogs.slice(0, 5)?.map((blog, index) => (
                                <Link key={index} to={`/blog-details/${""}`}>
                                    <div
                                        key={index}
                                        className="flex items-center my-4 border-2 hover:shadow-lg transition-all  rounded-lg shadow p-3 "
                                    >
                                        <img
                                            src={blog.BannerImageUrl}
                                            alt={blog.title}
                                            className="w-14 h-14 rounded-lg object-cover"
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-sm text-black font-medium">{blog.title}</h3>

                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
