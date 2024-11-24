import Image from "next/image";
import Link from "next/link";
// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. S.I.M. Khairun Nabi Khan",
    designation:
      "Neuro Surgeon & Spine Surgeon, Associate Professor, Department of...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
    bio: "Dr. Khairun Nabi Khan is a renowned neurosurgeon with over 20 years of experience specializing in spine surgeries.",
  },
  {
    id: 2,
    name: "Professor. Dr. Bimal Chandra Shil",
    designation:
      "Specialist in Medicine, Gastrointestinal & Liver Diseases Ex...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc2.jpg",
    bio: "Dr. Bimal Chandra Shil is an expert in liver diseases with numerous successful cases treated across Bangladesh.",
  },
  {
    id: 3,
    name: "Dr. A.F.M. Kamal Uddin",
    designation: "Oncologist",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc3.jpg",
    bio: "Dr. Kamal Uddin is a dedicated oncologist committed to providing top-notch cancer treatment.",
  },
  {
    id: 4,
    name: "Professor Dr. Afzalunnessa Chowdhury",
    designation: "Gynecologist, Obstetrician & Laparoscopic Surgeon, Former...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
    bio: "Dr. Afzalunnessa Chowdhury specializes in advanced laparoscopic surgeries with a focus on women's health.",
  },
];

const DoctorPage = ({ params }) => {
  const { id } = params; // Get doctor ID from the route params
  const doctor = doctors.find((doc) => doc.id === parseInt(id)); // Find the doctor by ID

  // If doctor is not found, show an error message
  if (!doctor) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-gray-600">Doctor not found</h1>
      </div>
    );
  }

  return (
    <section className="py-12 pt-32 bg-gray-50">
      <div className="md:mx-20 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-start">
          Doctor
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Doctor Image */}
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
          {/* Doctor Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {doctor.name}
            </h1>
            <p className="text-lg text-gray-600 mb-2">{doctor.designation}</p>
            <p className="text-sm text-green-700 font-medium mb-4">
              {doctor.hospital}
            </p>
            <p className="text-gray-700">{doctor.bio}</p>
          </div>
        </div>
        <div className="flex justify-center mt-7 md:mt-10 ">
          <Link href="/doctors">
            <div className="max-w-52 md:px-6 md:py-3 px-4 py-3 hover:bg-white hover:text-[#825f8d] font-semibold rounded text-white bg-[#825f8d] border border-[#825f8d] transition-all ease-in-out">
              View All Doctors
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorPage;
