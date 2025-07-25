import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const ExclusiveFeatures = ({ contents }) => {
  const content = contents.filter((s) => s.type === 'feature_explanations')

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">{content[0].name}</h2>

      <div className="bg-white border rounded-lg p-6 space-y-10 shadow-sm">
        {content[0].values.map((section, index) => (
          <div
            key={section.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          >
            {/* Text content */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <div className="space-y-2">
                {console.log(section)}
                {section.checklist.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FaCheck className="text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-800">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div>
              <Image
                src={section.file_url}
                alt={section.title}
                className="rounded-lg"
                width={200}
                height={150}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default ExclusiveFeatures