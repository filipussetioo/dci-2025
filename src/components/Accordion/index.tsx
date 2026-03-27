// import  { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// const AccordionItem = ({ title, content, isOpen, onClick }: any) => (
//   <div className="border-b border-gray-200 dark:border-gray-800 transition-colors">
//     <button
//       onClick={onClick}
//       className="w-full py-8 flex justify-between items-center text-left group"
//     >
//       <span
//         className={`text-2xl transition-colors duration-300 ${
//           isOpen
//             ? "text-blue-600 font-semibold dark:text-blue-400"
//             : "text-gray-800 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
//         }`}
//       >
//         {title}
//       </span>
//       <div
//         className={`p-2 rounded-full transition-transform duration-500 ${
//           isOpen
//             ? "bg-blue-600 text-white rotate-180"
//             : "bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500"
//         }`}
//       >
//         {isOpen ? <Minus size={20} /> : <Plus size={20} />}
//       </div>
//     </button>
//     <div
//       className={`overflow-hidden transition-all duration-500 ease-in-out ${
//         isOpen ? "max-h-96 pb-8" : "max-h-0"
//       }`}
//     >
//       <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-3xl transition-colors">
//         {content}
//       </p>
//     </div>
//   </div>
// );

// export const AccordionSection = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const data = [
//     {
//       title: "Sustainable Power Utilization",
//       content:
//         "We are committed to achieving net-zero emissions by 2030. Our facilities currently utilize a mix of renewable energy sources and advanced cooling technologies to maintain a PUE of 1.2.",
//     },
//     {
//       title: "Market Expansion Strategy",
//       content:
//         "Following our success in Cibitung, we are scaling our presence in Karawang and Jakarta, adding an additional 120MW of capacity to meet growing cloud demand.",
//     },
//     {
//       title: "Corporate Governance & Ethics",
//       content:
//         "Transparency is the bedrock of our operations. Our governance framework ensures full compliance with international standards and local regulatory requirements.",
//     },
//   ];

//   return (
//     <section className="py-24 px-6 md:px-12 bg-white dark:bg-transparent transition-colors duration-300" id="strategy">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
//         <div className="lg:w-1/3">
//           <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 transition-colors">
//             Core Focus
//           </h2>
//           <h3 className="text-4xl font-light text-gray-900 dark:text-white leading-tight transition-colors duration-300">
//             Strategic <br />
//             Commitments.
//           </h3>
//         </div>
//         <div className="lg:w-2/3">
//           {data.map((item, index) => (
//             <AccordionItem
//               key={index}
//               title={item.title}
//               content={item.content}
//               isOpen={openIndex === index}
//               onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
