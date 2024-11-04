import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Sony Madison',
    position: 'CEO, Director',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    phone: '+123-456-7890', // Replace with actual phone numbers
  },
  {
    name: 'Hary Warth',
    position: 'Head Manager',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    phone: '+123-456-7891',
  },
  {
    name: 'Jenny Hobb',
    position: 'Branch Manager',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    phone: '+123-456-7892',
  },
  {
    name: 'Johny Smith',
    position: 'Supervisor',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    phone: '+123-456-7893',
  },
];

const Team = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-600 uppercase">Our Team</p>
        <h2 className="text-4xl font-bold text-red-500">
          Team <span className="text-black">Members</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Sint nascertur facere, delectus conubia consequuntur, nonummy distinctio! Non officiis, id natus non nisi provident justo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.position}</p>

            <div className="mt-4">
              <div className="bg-red-500 text-white rounded-md py-2 px-4 inline-block mb-4">
                <p>{member.position}</p>
              </div>
              <div className="flex justify-center space-x-3 mt-4 text-gray-500">
                <Link to={""} className="hover:text-red-500">
                  <i className="p-2 border block rounded-full shadow-md text-xl">
                    <FaFacebook />
                  </i>
                </Link>
                <Link to={""} className="hover:text-red-500">
                  <i className="p-2 border block rounded-full shadow-md text-xl">
                    <FaLinkedin />
                  </i>
                </Link>
                <div className="relative group">
                  <Link to={""} className="hover:text-red-500">
                    <i className="p-2 border block rounded-full shadow-md text-xl">
                      <FaSquarePhone />
                    </i>
                  </Link>
                  <span className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {member.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
