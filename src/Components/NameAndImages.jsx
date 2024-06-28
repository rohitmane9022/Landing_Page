import { RiSendPlaneFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NameAndImages = () => {
  return (
    <section className="bg-white rounded-xl overflow-hidden">
      <div>
        <img src="https://media.licdn.com/dms/image/D4D16AQGGepSaAhtRgQ/profile-displaybackgroundimage-shrink_350_1400/0/1704028053971?e=1724889600&v=beta&t=ImidTH2dFq_3fzLa9DmcybmnHqD-h4vdL7SGQgoiH9w" alt="Background Image" /></div>

      <div className="flex flex-col px-5 md:max-h-[240px] sm:h-[350px] h-[300px] justify-between">
        <div className="flex justify-between">
        <div className="h-40 w-40 rounded-full overflow-hidden relative -top-28 ml-4 border-4 border-white">
          <img src="https://media.licdn.com/dms/image/D4D03AQGbFXPVcBCUQQ/profile-displayphoto-shrink_400_400/0/1698157299061?e=1724889600&v=beta&t=T5wWRsLcbHtkTx0TzLItuCBfxw6drM12N7Zd5os4Q90" alt="Profile Image" />
          </div>
        <div className="hidden items-center md:flex relative -top-8 gap-1 ">
          <img src="https://media.licdn.com/dms/image/D4D12AQGqNOOZDzlY5w/series-logo_image-shrink_200_200/0/1707150700627?e=1724889600&v=beta&t=k7xU18gDT8RCZ5FgYpxbMBBhMpSoZzsQMLwHRK1ZE8A" alt="Product Image" className="w-5 h-5" /><p>Product Market Fit</p></div>
        </div>
        <div className="md:flex justify-between items-center relative -top-24 bottom-2 ml-4">
          <div>
          <div>
            <div className="flex items-center gap-1">
          <h1 className="text-2xl font-semibold">Guillermo Flor </h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>
          <p className="font-normal">Venture Capital Investor @ GoHub Ventures | Daily insights about</p>
          <p className=" text-gray-500 font-normal text-base flex flex-col">Valencia, Valencian Community, <span className="text-primary-color font-medium"> Spain 50,000 followers 500+ connections</span></p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center my-4 gap-1">
          <div>
            <a href="https://www.linkedin.com/in/guillermoflor/" target="_black">
            <button className="bg-primary-color text-base  px-3 py-1 text-white gap-1 font-semibold rounded-full flex items-center justify-center"><RiSendPlaneFill className="text-white text-[17px]"/> Message</button>
            </a>
            </div>
            <div>
            <p className="text-gray-700 font-medium">100% response rate in 7 days</p>
            </div>
            </div>
          </div>
        <div className="text-xs ">
          <div className="md:flex items-center my-2 bg-gray-100 px-3 py-1 rounded-xl hidden lg:visible "><FaTwitter className="text-blue-600 text-sm"/><p className="text-xs" >@guillermoflor</p></div>
          <div className="md:flex items-center my-2 bg-gray-100 px-3 py-1 rounded-xl hidden lg:visible "><FaLinkedin className="text-blue-600 text-sm"/><p className="text-xs" >@guillermoflor</p></div>
          <div className="md:flex items-center my-2 bg-gray-100 px-3 py-1 rounded-xl hidden lg:visible "><FaYoutube className="text-red-600 text-sm"/><p className="text-xs" >@guillermoflor</p></div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default NameAndImages