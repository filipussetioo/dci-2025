const LocationItem = ({ city, count, status }: any) => (
  <div className="flex items-center justify-between py-6 border-b border-gray-100 group cursor-pointer">
    <div className="flex items-center gap-6">
      <span className="text-gray-300 font-mono group-hover:text-blue-600 transition">
        / 0{count}
      </span>
      <h4 className="text-2xl font-medium text-gray-800 group-hover:translate-x-2 transition-transform">
        {city}
      </h4>
    </div>
    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
      {status}
    </span>
  </div>
);

export const LocationSection = () => (
  <section className="py-24 px-6 md:px-12 bg-white" id="locations">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
      <div className="lg:w-1/3">
        <h2 className="text-4xl font-light mb-6">
          Strategic <br />
          <span className="font-semibold text-blue-600">Locations</span>
        </h2>
        <p className="text-gray-500">
          Strategically positioned across the region to ensure the best possible
          latency and redundancy for our clients.
        </p>
      </div>
      <div className="lg:w-2/3">
        <LocationItem city="Cibitung" count={1} status="Operational" />
        <LocationItem city="Karawang" count={2} status="Expanding" />
        <LocationItem city="Jakarta" count={3} status="Operational" />
        <LocationItem city="Bintan" count={4} status="Under Development" />
      </div>
    </div>
  </section>
);
