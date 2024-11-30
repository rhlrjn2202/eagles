const Logo = () => {
    return (
      <div className="flex items-center">
        <div className="w-14 h-14 -my-2 bg-yellow-400 flex items-center justify-center mr-2 p-2 rounded">
          <img
            src="/images/eagle-logo.png"
            alt="Eagles Cricket Club"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-xl font-bold">
          <span className="text-white">EAGLES</span>
          <span className="text-yellow-400">CC</span>
        </span>
      </div>
    );
  };
  
  export default Logo;