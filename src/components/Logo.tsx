const Logo = () => {
  return (
    <div className="flex items-center relative">
      <div className="absolute -top-3 flex items-center justify-center">
        <div className="w-24 h-20 bg-yellow-400 flex items-center justify-center rounded-b-lg shadow-lg">
          <img
            src="/images/eagle-logo.png"
            alt="Eagles Cricket Club"
            className="w-20 h-20 object-contain p-2"
          />
        </div>
      </div>
      <span className="text-xl font-bold ml-28">
        <span className="text-white">EAGLES</span>
      </span>
    </div>
  );
};

export default Logo;