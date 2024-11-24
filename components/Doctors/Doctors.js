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
  },
  {
    id: 2,
    name: "Professor. Dr. Bimal Chandra Shil",
    designation:
      "Specialist in Medicine, Gastrointestinal & Liver Diseases Ex...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc2.jpg",
  },
  {
    id: 3,
    name: "Dr. A.F.M. Kamal Uddin",
    designation: "Oncologist",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc3.jpg",
  },
  {
    id: 4,
    name: "Professor Dr. Afzalunnessa Chowdhury",
    designation: "Gynecologist, Obstetrician & Laparoscopic Surgeon, Former...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
  },
];

const Doctors = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="md:mx-20 px-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Meet Our Doctors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <Link key={doctor.id} href={`/doctors/${doctor.id}`}>
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                {/* Doctor Image */}
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={200}
                  height={100}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
                {/* Doctor Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {doctor.designation}
                  </p>
                  <p className="text-sm font-medium text-green-700">
                    {doctor.hospital}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
