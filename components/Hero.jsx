
import { FaStar } from "react-icons/fa";
import Trailer from "./Trailer";
const Hero = ({ hero }) => {

  return (
    <div className="bg-cover bg-center bg-no-repeat py-24 px-4 text-white "
      style={{ backgroundImage: `url(/back.png)` }}>
      <div className="container mx-auto">
        <div className="pb-4 md:pb-0 md:hidden">
          <Trailer contents={hero.media} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="col-span-1">
            <div className="py-2 text-white font-bold text-2xl">{hero.title}</div>
            <div className="md:flex gap-2">
              <div className="flex py-2">
                <FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" />
              </div>
              <div className="py-2">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</div>
            </div>
            <div className="prose max-w-none mb-1 text-gray-300" dangerouslySetInnerHTML={{ __html: hero.description }} />
          </div>
          <div className="hidden lg:col-span-1">
          </div>
        </div>

      </div>
    </div>

  )
}

export default Hero