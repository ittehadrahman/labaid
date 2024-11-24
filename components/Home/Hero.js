export default function Hero() {
  return (
    <section
      className="relative text-[white] text-center py-20 bg-cover bg-center md:min-h-[600px] "
      style={{
        backgroundImage: `url('/images/background.jpeg')`,
      }}
    >
      {/* Overlay for Blur Effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Welcome to Labaid Aesthetic & Laser Lounge
        </h1>
        <p className="mb-6 md:text-lg">
          Your destination for premium aesthetic treatments and laser services.
        </p>
        <button className="md:px-6 md:py-3 px-4 py-3 bg-white text-[#825f8d] font-semibold rounded hover:text-white hover:bg-[#825f8d] transition-all ease-in-out">
          Book an Appointment
        </button>
      </div>
    </section>
  );
}
