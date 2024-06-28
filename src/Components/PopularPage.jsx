import {PopularData} from "../data"
import PopularCart from "./PopularCart"

const PopularPage = () => {
  
  return (
   <section className="my-20 py-14 md:px-12 px-6  rounded-xl overflow-hidden bg-white ">
    <div> <h1 className="md:text-[45px] text-2xl md:leading-[3rem] font-semibold  font-Popins">Most Popular</h1></div>
    <div className="flex justify-between flex-wrap mt-5 mx-auto w-2/4 lg:w-full">
      {
        PopularData.map(item=>(
          <PopularCart item={item} key={item.length}/>
        ))
      }
    </div>
   </section>
  )
}

export default PopularPage