import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { useRouter } from 'next/router';


function Card({ title, description, videoUrl, deploy }) {

    const router = useRouter();

  const handleDeployClick = () => {
    router.push(deploy);
  };

  return (
    <div className="card-bg shadow-md  rounded-lg px-6 py-4 transition-transform transform hover:scale-105 mb-7">
    <ul className=" mt-5 text-base ml-0">
      <li className="text-base mb-6 ml-6">
        <p className="text-center text-xl colorLetras">{title}</p>
        <div className="mt-4 max-w-sm mx-auto">
          <iframe
            className="w-full h-40 object-center mt-4"
            src={videoUrl}
            title={`YouTube Video - ${title}`}
            frameBorder="0"
            allow="web-share"
            allowFullScreen
          ></iframe>
        </div>
      </li>
      <li className="text-center mt-6 ml-6">
        <p className="text-center">{description}</p>
      </li>
      <li className="text-center mt-6">
      <div className="flex items-center justify-center"> 
    <FaRocket size={24} className="text-blue-500 mr-2" /> 
    <p
  onClick={handleDeployClick}
  className="text-center"
  style={{
    cursor: 'pointer',
    transition: 'color 0.3s',
  }}
  onMouseEnter={(e) => (e.target.style.color = '#22a3bd')} 
  onMouseLeave={(e) => (e.target.style.color = '')}      
>
  Deployment
</p>
  </div>
</li>
    </ul>
  </div>
  );
}

export default Card;