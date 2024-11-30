const Logo = () => {
  return (
    <div className="flex items-center relative">
      <div className="absolute -top-3 flex items-center justify-center">
        <div className="w-28 h-24 bg-yellow-400 flex items-center justify-center rounded-b-lg shadow-lg">
          <img
            src="/images/eagle-logo.png"
            alt="Eagles Cricket Club"
            className="w-30 h-30 object-contain transform scale-110"
          />
        </div>
      </div>
      <span className="text-xl font-bold ml-32">
        <span className="text-white">EAGLES</span>
      </span>
    </div>
  );
};

export default Logo;