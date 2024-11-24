import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaCommentAlt,
} from "react-icons/fa";
import map from "@/public/images/map.png"
import Image from "next/image";
export default function ContactUs() {
  return (
    <section className="py-12 md:pt-36 pt-28" style={{ backgroundColor: "#f7f5f9" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details Section */}
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#825f8d" }}
            >
              For Further Queries Please Contact
            </h2>
            <p className="mb-4">
              <FaMapMarkerAlt className="inline-block mr-2" />
              House- 06, Road-04, Dhanmondi, Dhaka- 1205, Bangladesh.
            </p>
            <p className="mb-4">
              <FaPhone className="inline-block mr-2" />
              +88 02 58610793-8, +88 0241060908-18
            </p>
            <p className="mb-4">
              <FaEnvelope className="inline-block mr-2" />
              info@labaidgroup.com
            </p>
            <Image
                src={map} // Replace with the path to your map image
                alt="Map of Bangladesh"
                width={400}
                height={200}
              />
          </div>

          {/* Contact Form Section */}
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#825f8d" }}
            >
              Write to Us
            </h2>
            <form>
              <div className="space-y-4">
                {/* Name Field */}
                <div className="flex items-center bg-gray-200 p-3 rounded-md">
                  <FaUser className="text-xl text-gray-600 mr-2" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                {/* Phone Field */}
                <div className="flex items-center bg-gray-200 p-3 rounded-md">
                  <FaMobileAlt className="text-xl text-gray-600 mr-2" />
                  <input
                    type="text"
                    placeholder="Cell Phone"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                {/* Email Field */}
                <div className="flex items-center bg-gray-200 p-3 rounded-md">
                  <FaEnvelope className="text-xl text-gray-600 mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                {/* Venue Field */}
                <div className="flex items-center bg-gray-200 p-3 rounded-md">
                  <FaMapMarkerAlt className="text-xl text-gray-600 mr-2" />
                  <input
                    type="text"
                    placeholder="Venue"
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                {/* Message Field */}
                <div className="flex items-start bg-gray-200 p-3 rounded-md">
                  <FaCommentAlt className="text-xl text-gray-600 mr-2 mt-1" />
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full bg-transparent outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 rounded-md text-white font-bold bg-[#825f8d] hover:text-[#825f8d] hover:bg-white transition-all ease-in-out border-[#825f8d] border"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
