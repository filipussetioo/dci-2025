import React from "react";
import { FileText, Download, ArrowRight, Table } from "lucide-react";

const DownloadCard = ({ title, size, type, color }) => (
  <div className="group relative bg-white border border-gray-100 p-8 rounded-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
    <div
      className={`w-12 h-12 ${color} mb-6 flex items-center justify-center rounded-sm text-white transition-transform group-hover:scale-110`}
    >
      {type === "excel" ? <Table size={24} /> : <FileText size={24} />}
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>

    <div className="flex items-center justify-between mt-8">
      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
        PDF — {size}
      </span>
      <div className="flex items-center text-sm font-bold text-gray-900 group-hover:gap-2 transition-all">
        Download <Download size={16} className="ml-2" />
      </div>
    </div>

    {/* Decorative Border Bottom */}
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover:w-full" />
  </div>
);

export const DownloadSection = () => {
  return (
    <section id="downloads" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase">
            Download <span className="font-light">Center</span>
          </h2>
          <div className="h-[1px] flex-grow bg-gray-100"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-200 border border-gray-200">
          {[
            { t: "Annual Report 2024 (Full)", s: "12.5 MB", type: "PDF" },
            { t: "Sustainability Report 2024", s: "8.1 MB", type: "PDF" },
            //   { t: "Corporate Governance Manual", s: "2.4 MB", type: "PDF" },
            //   { t: "Audited Financial Statements", s: "15.0 MB", type: "PDF" },
            //   { t: "ESG Data Worksheet", s: "1.2 MB", type: "XLSX" },
            //   { t: "Investor Presentation", s: "4.8 MB", type: "PPTX" }
          ].map((file, i) => (
            <div
              key={i}
              className="bg-white p-10 hover:bg-gray-50 transition-colors group relative"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FileText size={24} />
                </div>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                  {file.type}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                {file.t}
              </h4>
              <p className="text-xs text-gray-400 font-mono mb-8">{file.s}</p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-gray-900 transition-colors">
                Download <Download size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
