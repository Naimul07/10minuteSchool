import Image from "next/image"


const ChechLists = ({ list }) => {
  return (
    <div className="p-2 mb-2">
      <h1 className="text-2xl font-bold mb-6">এই কোর্সে যা থাকছে</h1>
      <div className="px-2 ">
        <ul className="list-none">
          {list.map((item, id) => (
            <li className="flex gap-3 py-1 items-center" key={id}>
              <div><Image src={item.icon} height={10} width={15} alt="icon" /></div>
              <div className="text-black font-medium">{item.text}</div>
            </li>

          ))}
        </ul>
      </div>
    </div >
  )
}

export default ChechLists