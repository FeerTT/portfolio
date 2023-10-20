import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { useRouter } from 'next/router';


function Card({ title, description, videoUrl, deploy }) {

    const router = useRouter();

  const handleDeployClick = () => {
    router.push(deploy);
  };

  return (
    <div className="card-bg shadow-md rounded-lg w-full max-w-md mx-auto px-4 py-4 transition-transform transform hover:scale-105 border mb-4">
  <div className="card-content">
    <p className="text-center text-lg colorTituloProject mt-2">{title}</p>
    <div className="gradient-border mt-2 max-w-full mx-auto">
      <iframe
        className="w-full h-40 object-center"
        src={videoUrl}
        title={`YouTube Video - ${title}`}
        frameBorder="0"
        allow="web-share"
        allowFullScreen
      ></iframe>
    </div>
    <p className="text-center parrafo mt-3">{description}</p>
  </div>
  <div className="deploy-button mt-5">
    <div className="flex items-center justify-center mt-2">
      <FaRocket onClick={handleDeployClick} size={20} className="text-blue-500 mr-2" />
      <button
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
      </button>
    </div>
  </div>
</div>
  );
}

export default Card;