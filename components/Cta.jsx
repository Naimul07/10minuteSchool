

const Cta = ({ des }) => {
  return (
    <div className="my-2">

      <h1 className="text-2xl font-bold mb-3 p-3">৳1000</h1>

      <div className="flex justify-center">
        <button className="p-3 w-full bg-green-600 rounded-md text-white text-center hover:bg-green-700">
          {des.name}
        </button>

      </div>
    </div>
  )
}

export default Cta