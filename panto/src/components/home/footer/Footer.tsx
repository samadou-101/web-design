import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Panto Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-900">Panto</h3>
          <p className="mt-2 text-sm text-gray-500">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-coragne font-semibold">Services</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Furniture Section */}
        <div>
          <h4 className="text-coragne font-semibold">Furniture</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-coragne font-semibold">Follow Us</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li className="flex items-center">
              <FaFacebookF className="mr-2 text-gray-700" /> Facebook
            </li>
            <li className="flex items-center">
              <FaTwitter className="mr-2 text-gray-700" /> Twitter
            </li>
            <li className="flex items-center">
              <FaInstagram className="mr-2 text-gray-700" /> Instagram
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between border-t border-gray-200 pt-4 text-sm text-gray-500 sm:flex-row">
        <div className="flex items-center space-x-2">
          <p>Copyright © {currentYear} - </p>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/samadou-101/web-design/tree/main/panto"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Abdessamad Saihi
            </a>
            <a
              href="https://github.com/samadou-101/web-design/tree/main/panto"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center"
            >
              <FaGithub className="relative top-[2.5px] text-gray-500 hover:text-gray-700" />
            </a>
          </p>
        </div>
        <div className="mt-2 space-x-4 sm:mt-0">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
