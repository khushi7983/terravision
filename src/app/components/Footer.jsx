

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-700 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-start gap-8 lg:mx-20 ">
        
        <div className="flex-1  my-5 ">
          <h1 className="text-2xl font-bold mb-5">Terravision</h1>
          <p className="text-gray-400 max-w-md">
            Terravision offers advanced satellite data analysis, empowering users to explore and monitor environmental changes through satellite imagery.
          </p>
        </div>

        <div className="flex-1 ml-24 my-5">
          <h3 className="text-lg font-semibold mb-5">Technology</h3>
          <ul className="leading-relaxed">
            <li className="text-sm text-gray-400 mb-1">Powered by: INSAT Satellite Data</li>
            <li className="text-sm text-gray-400 mb-1">Processing with: GeoTIFF & OpenCV</li>
            <li className="text-sm text-gray-400 mb-1">Built with: Next.js and React</li>
          </ul>
        </div>

        <div className="flex-1 my-5">
          <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
          <p className="text-sm text-gray-400">Email: support@terravision.com</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Terravision. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
