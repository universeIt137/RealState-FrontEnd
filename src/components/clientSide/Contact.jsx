import React from 'react';

const Contact = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="">
        <header className="bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/path/to/real-estate-banner.jpg)' }}>
          <h1 className="md:text-4xl font-bold text-[#21c45e] md:mb-6 mb-3 ">আমার ঠিকানা গ্রিন সিটি</h1>
        </header>

        <section className=" bg-white">
          <div className="container mx-auto px-2 md:px-4 grid md:grid-cols-2  md:gap-8">
            {/* Contact Info */}
            <div className=" space-y-2 md:space-y-4">
              <h2 className="md:text-3xl text-[#21c45e] font-semibold">Get in Touch</h2>
              <p className="text-[#21c45e] md:text-lg text-[10px] ">আমাদের সাথে যোগাযোগ করুন নিরাপদ আবাসন গড়ে তুলুন।</p>
              <div>
                <h3 className=" text-[14px] md:text-2xl text-[#21c45e] font-semibold">Address</h3>
                <p className=" text-[#21c45e] text-[10px] lg:text-lg ">৪৮, বিজয়নগর (৪র্থ তলা), পল্টন, ঢাকা-১০০০।</p>
              </div>
              <div>
                <h3 className=" text-[14px] md:text-2xl text-[#21c45e] font-semibold">Phone</h3>
                <p className="text-[#21c45e] text-[10px] lg:text-lg ">+88 01747-516981</p>
              </div>
              <div>
                <h3 className="text-[14px] md:text-2xl text-[#21c45e] font-semibold">Email</h3>
                <p className="text-[#21c45e] text-[10px] lg:text-lg ">amarthikana06@gmail.com</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 mt-4 p-3 md:p-6 rounded-lg shadow-lg">
              <form className=" space-y-2 md:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-[8px] md:text-sm font-medium ">Message</label>
                  <textarea rows="4" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="w-full md:text-[16px] text-[10px] text-white py-2 rounded-md bg-[#[#21c45e]] transition">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-6 md:py-12">
          <div className="container mx-auto px-2 md:px-4">
            <h2 className="md:text-4xl font-semibold text-center text-[#21c45e] mb-4 md:mb-8">Our Location</h2>
            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* Replace with a real map iframe or component */}
              <iframe
                title="Our Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099473!2d144.9556513153106!3d-37.81732697975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f0f04d%3A0xf4cdbf3b9e7e2de6!2sReal%20Estate%20Company!5e0!3m2!1sen!2s!4v1634264095730!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
