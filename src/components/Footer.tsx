"use client";
import { Boxes } from "./ui/background-boxes";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 h-96 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <Boxes />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative z-21">About Us</h2>
          <p className="mb-4 relative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            impedit neque placeat ex eos, sint, laboriosam blanditiis natus
            voluptatibus tenetur voluptatum deserunt quas, corporis maiores
            ratione ad eum! Adipisci, a.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative">Quick Links</h2>
          <ul className="relative">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 relative"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 relative"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 relative"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 relative"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 relative"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 relative"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 relative"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="relative">
          <h2 className="text-white text-lg font-semibold mb-4 relative">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8 relative">
        © 2024 Music School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
