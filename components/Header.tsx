import React from 'react';
import BookOpenIcon from './icons/BookOpenIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-full shadow-md">
              <BookOpenIcon className="h-8 w-8 text-blue-800" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wider">
                Geopolitical Analyser
              </h1>
              <p className="text-sm text-blue-200 font-medium">powered by Vedanta IAS Academy</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;