import React from "react";

const StatCard = ({ label, value, subtext }) => (
  <div className="group border-t border-gray-200 pt-8 pb-12 hover:border-blue-600 transition-colors duration-500">
    <p className="text-sm font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
      {label}
    </p>
    <h3 className="text-5xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
      {value}
    </h3>
    <p className="mt-2 text-gray-500 text-sm">{subtext}</p>
  </div>
);

export const PerformanceSection = () => (
  <section className="py-24 px-6 md:px-12 bg-white" id="performance">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <h2 className="text-4xl font-light text-gray-900">
          Performance <br />
          <span className="font-semibold">at a Glance</span>
        </h2>
        <p className="max-w-md text-gray-500 leading-relaxed">
          Consistent growth driven by operational excellence and a relentless
          focus on digital infrastructure scalability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard
          label="Total Capacity"
          value="500+ MW"
          subtext="Across all operational sites"
        />
        <StatCard
          label="Uptime"
          value="100%"
          subtext="Operational excellence since 2011"
        />
        <StatCard
          label="Revenue Growth"
          value="+24%"
          subtext="Year-over-year increase"
        />
        <StatCard
          label="Net Income"
          value="IDR 1.2T"
          subtext="Solid financial foundation"
        />
      </div>
    </div>
  </section>
);
