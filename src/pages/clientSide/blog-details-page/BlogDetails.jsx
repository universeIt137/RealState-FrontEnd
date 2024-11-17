import React from 'react'
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    window.scrollTo(0, 0);
    const blogs = [
        {
            title: 'test blog',
            date: '2024-07-18',
            image: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731834102/jlkm_wjkhfh.jpg',
        },
        {
            title: 'Mastering the Art of Blogging',
            date: '2024-07-01',
            image: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731834102/jlkm_wjkhfh.jpg',
        },
        {
            title: 'dsadasd',
            date: '2024-08-08',
            image: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731834102/jlkm_wjkhfh.jpg',
        },
    ];
    return (
        <div className=' w-11/12 mx-auto mt-24 lg:mt-0 ' >
            <div className=" min-h-screen flex items-center justify-center">
                <div className="flex flex-col lg:gap-14 lg:flex-row lg:justify-between ">
                    {/* Main Image Section */}
                    <div className="flex-1">
                        <img
                            src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731834102/jlkm_wjkhfh.jpg"
                            alt="Main Content"
                            className="w-full h-[70vh] rounded-lg shadow-md"
                        />
                    </div>

                    {/* Sidebar Section */}
                    <div className="flex-none w-full lg:w-1/4 mt-6 md:mt-0 md:ml-6">
                        <h2 className="text-xl font-semibold mb-4">Another Blogs</h2>
                        <div className="space-y-4">
                            {blogs.map((blog, index) => (
                                <Link to={`/blog-details/${""}`}>
                                    <div
                                        key={index}
                                        className="flex items-center my-4 border-2 hover:shadow-lg transition-all  rounded-lg shadow p-3 "
                                    >
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-14 h-14 rounded-lg object-cover"
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-sm text-black font-medium">{blog.title}</h3>
                                            <p className="text-xs text-black">{blog.date}</p>
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