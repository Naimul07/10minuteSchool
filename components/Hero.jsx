
import { FaStar } from "react-icons/fa";
const Hero = ({ hero }) => {

  return (
    <div className="bg-cover bg-center bg-no-repeat py-24 px-4 text-white"
      style={{ backgroundImage: `url(/back.png)` }}>
      <div>{hero.title}</div>
      <div className="flex gap-2">
        <div className="flex">
          <FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" />
        </div>
        (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
      </div>
      <div className="prose max-w-none mb-6 text-gray-400" dangerouslySetInnerHTML={{ __html: hero.description }} />

    </div>

  )
}

export default Hero