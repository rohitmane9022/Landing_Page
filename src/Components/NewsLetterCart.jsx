const NewsLetterCart = ({ item }) => {
  return (
    <a href={item.link} target="_black">
    <div className="flex flex-col-reverse md:flex-row items-center    md:justify-between py-4 border-b  border-gray-200">
      <div className="mt-5">
        <h1 className="md:text-xl font-bold text-[#363737]">{item.title}</h1>
        <p className="md:text-sm">{item.para}</p>
      </div>
      <div>
        <img src={item.img} alt="news Image" className="w-32  md:w-44  object-fill"  /></div>
    </div>
    </a>
  );
};

export default NewsLetterCart;
