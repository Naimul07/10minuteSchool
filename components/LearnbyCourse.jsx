'use client'
import { FaCheck } from "react-icons/fa";

const LearnbyCourse = ({contents}) => {
  const content = contents.filter((s)=> s.type === 'pointers')
  
// console.log(content);
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">{content[0].name}</h2>

       <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
          {content[0].values.map((item, index) => (
            <div key={item.id} className="flex items-start gap-3">
              <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-800 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};




export default LearnbyCourse