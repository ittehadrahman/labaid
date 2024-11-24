import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import map from "@/public/images/map.png"
import Image from "next/image"; // If you're using Next.js for the map image.

export default function Footer() {
  return (
    <footer
      className="text-white py-10"
      style={{
        background: "linear-gradient(45deg, #514655, #825f8d)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get Us Section */}
          <div className="text-center md:text-start">
            <h3 className="text-2xl font-semibold mb-4">Get Us</h3>
            <p>House- 01, Road-04, Dhanmondi, Dhaka 1205, Bangladesh.</p>
            <p className="mt-2">
              <FaPhone className="inline-block mr-2" />
              +88 02 58610793-8, +88 0241060908-18
            </p>
            <p className="mt-2">
              <FaEnvelope className="inline-block mr-2" />
              info@labaidgroup.com
            </p>
            <div className="flex mt-4 space-x-4 justify-center md:justify-start">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="text-center md:text-start">
            <h3 className="text-2xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Online Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hospitals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Diagnostics Centers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Doctors
                </a>
              </li>
            </ul>
          </div>

          {/* Find Us Section */}
          <div className="text-center md:text-start">
            <h3 className="text-2xl font-semibold mb-4">Find Us</h3>
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src={map} // Replace with the path to your map image
                alt="Map of Bangladesh"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} Labaid and Developed by{" "}
            <a href="#" className="font-bold">
              Mohammad Ittehad Rahman Sami
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
