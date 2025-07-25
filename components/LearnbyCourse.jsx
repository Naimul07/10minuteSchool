import { FaCheck } from "react-icons/fa";

const LearnbyCourse = ({contents}) => {
  

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">কোর্সটি করে যা শিখবেন</h2>

      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
          {learnList.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-gray-800 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default LearnbyCourse