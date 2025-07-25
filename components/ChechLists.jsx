import Image from "next/image"


const ChechLists = ({ list }) => {
  return (
    <div>
      <div>
        <ul class="list-none">
          {list.map((item, id) => (
         <li className="flex gap-3 py-0.5 items-center">
          <div><Image src={item.icon} height={10} width={15} alt="icon"/></div>
          <div>{item.text}</div>
         </li>

        ))} 
        </ul>
    </div>
    </div >
  )
}

export default ChechLists