import { newsData } from "../data"
import NewsLetterCart from "./NewsLetterCart"

const NewsLetter = () => {
  return (
    <section className="my-20 py-14 px-12  rounded-xl overflow-hidden bg-white ">
    <div> <h1 className="md:text-[45px] text-2xl md:leading-[3rem] font-semibold  font-Popins">The Product Market Fit Newsletter</h1></div>
    <div>
      {
        newsData.map(item=>(
          <NewsLetterCart item={item} key={item.length}/>
        ))
      }
    </div>
   </section>
  )
}

export default NewsLetter

//The Product Market Fit Newsletter