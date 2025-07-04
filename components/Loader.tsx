
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin border-t-transparent"></div>
        <p className="mt-4 text-lg font-medium text-gray-600">Generating comprehensive analysis... Please wait.</p>
    </div>
  );
};

export default Loader;
