import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around gap-4">
        {/* Logo */}
        <h1 className="text-4xl md:text-5xl font-bold">Logo</h1>

        {/* Navigation Links */}

        {/* Social Media */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
