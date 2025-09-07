import React from 'react';
import kozaLogo from '../img/kozaLogo.png';

const Loading = ({ message = "Yükleniyor..." }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-6">
          <img 
            src={kozaLogo} 
            alt="Koza Matbaa Logo" 
            className="h-16 w-auto mx-auto animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
        </div>
        <div className="spinner mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
