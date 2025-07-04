
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-lg mb-2">Vedanta IAS Academy</h3>
            <p className="text-blue-200">Your partner in achieving civil services success.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p className="text-blue-200 mb-1">
              <strong>Head Office:</strong> Rohini, D-11/156,157 Sector 8 Rohini (East Metro Opp-Pillar No-389) Delhi-85
            </p>
            <p className="text-blue-200 mb-1"><strong>Phone:</strong> 011-45623302-308 / 9911753333</p>
            <p className="text-blue-200"><strong>Email:</strong> vedantaiasacademy@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Developer Credit</h3>
            <p className="text-blue-200">Designed & Developed by Pratyush Kumar.</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-blue-800 text-center text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} Vedanta IAS Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
