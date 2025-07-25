
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi'
const Instructors = ({ teacher }) => {

  const instructor = teacher?.filter((s) => s.type === 'instructors');
  return (
    <div className="p-6">
      <h2 className="text-2xl font-extrabold mb-4 px-2">
        {instructor[0].name}
      </h2>

      <div className="flex items-center gap-4 border-2 shadow border-gray-100 py-4 rounded-2xl px-2">

        <div className="bg-yellow-200 rounded-full p-1">
          <Image src={instructor[0].values[0].image} height={200} width={200} className='rounded-full' alt='instructor' />
        </div>

        {/* Text info */}
        <div>
          <div className="flex items-center text-xl font-bold text-gray-900">
            {instructor[0].values[0].name}
            <HiChevronRight className="ml-1 text-gray-400" />
          </div>
          <div className="font-medium  mt-1" dangerouslySetInnerHTML={{ __html: instructor[0].values[0].description }}>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Instructors