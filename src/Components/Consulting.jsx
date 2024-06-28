

const Consulting = () => {
  return (
    <section className="my-20 flex md:justify-between flex-col md:flex-row md:py-14 py-7 md:px-14 px-7  rounded-xl overflow-hidden bg-white ">
      <div className="md:mt-16 mt-7 md:w-[490px]">
        <h1 className="md:text-[45px] text-3xl font-semibold font-Popins leading-10">Growth consulting <span>1o1</span> </h1>
        <p className="md:text-lg text-gray-500 mt-5">Go on a consulting call to get your growth strategy on point</p>
        <button className="bg-primary-color text-white py-1 px-4 text-lg font-semibold rounded-full mt-5">Book now</button>
      </div>
      <div className="mt-5 md:mt-0 lg:w-[50%]">
        <img src="https://images.squarespace-cdn.com/content/v1/5f356b9cde602d320eaee4b2/3bc9215f-4b2d-404a-8bbd-e3c97c81d486/Screen+Shot+2022-11-18+at+1.57.27+PM.png?format=1500w" alt="" />
      </div>
    </section>
  )
}

export default Consulting
