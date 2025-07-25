import Image from "next/image";

const CourseLaidout = ({contents}) => {
  const content = contents.filter((s)=> s.type === 'features')
  // console.log(content)
  return (
    <div className=" mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">{content[0].name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-lg text-white">
        {content[0].values.map((item, index) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className={`p-3 rounded-full`}>
              <Image src={item.icon} width={40} height={45} alt="icon"/>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm mt-1">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default CourseLaidout