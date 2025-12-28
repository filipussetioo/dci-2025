export const EcosystemGrid = () => (
  <section className="py-20 px-6 md:px-12 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-6">
        {/* Main Pillar */}
        <div className="col-span-12 md:col-span-8 bg-white p-12 rounded-sm border border-gray-100 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
              Core Pillar
            </span>
            <h3 className="text-3xl font-semibold mt-4 mb-6 text-gray-900">
              Hyper-Scale Data Centers
            </h3>
            <p className="text-gray-500 text-lg max-w-xl">
              We provide the foundation for the world's leading cloud providers
              and enterprises, ensuring high-availability and security.
            </p>
          </div>
          <button className="text-sm font-bold border-b-2 border-blue-600 w-fit pb-1 hover:text-blue-600 transition">
            Explore Facilities
          </button>
        </div>

        {/* Side Pillar */}
        <div className="col-span-12 md:col-span-4 bg-gray-900 p-12 rounded-sm text-white">
          <h3 className="text-2xl font-semibold mb-4">Connectivity</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Direct access to a rich ecosystem of network providers and internet
            exchanges.
          </p>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2">○ 50+ Network Providers</li>
            <li className="flex items-center gap-2">○ Low Latency Peering</li>
            <li className="flex items-center gap-2">○ Carrier Neutral</li>
          </ul>
        </div>

        {/* Small Pillar 1 */}
        <div className="col-span-12 md:col-span-4 bg-white p-8 border border-gray-100">
          <h4 className="font-bold text-gray-900 mb-2">Sustainable Energy</h4>
          <p className="text-gray-500 text-sm">
            Commitment to green energy transition and carbon footprint
            reduction.
          </p>
        </div>

        {/* Small Pillar 2 */}
        <div className="col-span-12 md:col-span-8 bg-blue-50 p-8 border border-blue-100">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-blue-900">Security & Compliance</h4>
            <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 font-bold">
              ISO CERTIFIED
            </span>
          </div>
          <p className="text-blue-700/70 text-sm mt-2">
            Upholding the highest international standards for data protection
            and site safety.
          </p>
        </div>
      </div>
    </div>
  </section>
);
