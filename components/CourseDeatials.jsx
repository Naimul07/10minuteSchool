'use client'
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CourseDeatials = ({ contents }) => {
  const content = contents.filter((s) => s.type === 'about')
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-6 px-2">{content[0].name}</h1>
      </div>
      <div className="w-full" id="accordion-collapse">
        {content[0].values.map((item, index) => (
          <div key={item.id}>
            <h2>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-50 ${index === 0 ? "rounded-t-xl" : ""
                  } focus:ring-1 focus:ring-gray-50 gap-3`}
                aria-expanded={openIndex === index}
                onClick={() => toggleAccordion(index)}
              >
                <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                <FaChevronDown
                  className={`w-3 h-3 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
            </h2>
            {openIndex === index && (
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900" dangerouslySetInnerHTML={{ __html: item.description }}>
                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default CourseDeatials