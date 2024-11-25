import React from 'react'

const Footer = ({footerRef}) => {
  return (
    <footer ref={footerRef} className="bg-gray-100 ">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 font-racingOneSans">About Us</h3>
          <p className="text-gray-600">
            We are passionate about providing high-quality bicycles and
            accessories to cycling enthusiasts. Our commitment to excellence
            and customer satisfaction sets us apart.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 font-racingOneSans">Contact Us</h3>
          <address className="text-gray-600 not-italic">
            <p>Connaught Place</p>
            <p>New Delhi, India</p>
            <p>Phone: 9999999999</p>
            <p>Email: contact@bikestore.com</p>
          </address>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 font-racingOneSans">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600">
              Facebook
            </a>
            <a href="#" className="text-gray-600 ">
              Twitter
            </a>
            <a href="#" className="text-gray-600 ">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-cneter gap-2 mt-8 border-t pt-8 text-center text-gray-600">
        <p>
          &copy; 2024 BikeStore. All rights reserved.
        </p>
        <p>Made with ❣️ for you.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer