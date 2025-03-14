export const CardInfo = ({ title, content }) => {

    return (
      <div className="w-full h-auto sm:w-64 md:w-72 lg:w-96 xl:w-[400px] rounded-lg overflow-hidden shadow-lg 
                      bg-gray border border-gray-200 transition-all duration-300 ease-in-out">
  
        <div className="px-6 py-3 text-center">
          <h2 className="font-semibold text-xl text-white truncate">{title}</h2>
        </div>
        <div className="px-6 py-4">
          <div className="text-white text-base h-auto" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
  
    );
  };