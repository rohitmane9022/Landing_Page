

const PopularCart = ({item,key}) => {
  
  return (
    <div key={key}>
      <div className="rounded-lg border-2 overflow-hidden">
        <img src={item.img} alt="Popular Image" className="md:w-64 h-32   md:h-48 " />
      </div>
      <div className="flex justify-between items-center mt-6 text-base font-semibold w-full mx-auto">
        <p className="w-[60%]">{item.title}</p>
        <p className="w-[40%] text-end">{item.price}</p>
      </div>
    </div>
  )
}

export default PopularCart