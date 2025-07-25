

const Cta = ({des}) => {
  return (
    <div className="flex justify-center">
      <button className="p-3 w-5/6 bg-green-600 rounded-md text-white text-center hover:bg-green-700">
        {des.name}
      </button>
      
      </div>
  )
}

export default Cta