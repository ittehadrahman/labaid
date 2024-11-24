export default function Offers() {
  return (
    <section id="services" className="py-12 md:mx-20">
      <h2 className="text-lg font-semibold text-gray-500 uppercase text-center">
        OUR OFFERS
      </h2>
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Hydrafacials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-1">
        <div className="p-6 bg-gray-100 rounded">
          <h3 className="font-semibold text-lg">Advanced Hydra Facial</h3>
          <p>Offer Price: Tk. 4000/-</p>
        </div>
        <div className="p-6 bg-gray-100 rounded">
          <h3 className="font-semibold text-lg">Glowing Hydra Facial</h3>
          <p>Offer Price: Tk. 1500/-</p>
        </div>
        <div className="p-6 bg-gray-100 rounded">
          <h3 className="font-semibold text-lg">Basic Hydra Facial</h3>
          <p>Offer Price: Tk. 1500/-</p>
        </div>
        <div className="p-6 bg-gray-100 rounded">
          <h3 className="font-semibold text-lg">Acne Hydra Facial</h3>
          <p>Offer Price: Tk. 1500/-</p>
        </div>
      </div>
    </section>
  );
}
