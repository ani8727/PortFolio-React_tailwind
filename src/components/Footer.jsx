import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 duration-200"
              >
                <FaFacebook size={24} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 duration-200"
              >
                <FaTwitter size={24} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 duration-200"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://linkedin.com/in/aniket-gupt-001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 duration-200"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>

            {/* Bottom Text */}
            <div className="mt-8 border-t border-gray-400 pt-6 flex flex-col items-center">
              <p className="text-sm text-gray-700">&copy; 2024 Aniket Gupta. All rights reserved.</p>
              <p className="text-sm text-gray-600">
                Designed & Developed by <span className="font-semibold">Aniket Gupta</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
