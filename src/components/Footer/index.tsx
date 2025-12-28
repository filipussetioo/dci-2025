export const Footer = () => (
  <footer className="bg-white pt-20 pb-10 px-6 md:px-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2">
          <div className="text-xl font-bold mb-6">
            DCI <span className="font-light">INDONESIA</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Southeast Asia's leading data center provider, committed to building
            the digital future of the region.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-sm mb-6 uppercase tracking-wider">
            Solutions
          </h5>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-blue-600 cursor-pointer">Colocation</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Interconnection
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Build-to-Suit
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-sm mb-6 uppercase tracking-wider">
            Investor Relations
          </h5>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-blue-600 cursor-pointer">
              Financial Reports
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Stock Information
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Governance</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-sm mb-6 uppercase tracking-wider">
            Support
          </h5>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Media Kit</li>
            <li className="hover:text-blue-600 cursor-pointer">Careers</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">
          © 2024 PT DCI Indonesia Tbk. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-400">
          <span className="hover:text-gray-900 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-gray-900 cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  </footer>
);
