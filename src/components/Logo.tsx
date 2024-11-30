const Logo = () => {
  return (
    <div className="flex items-center relative">
      <div className="absolute -top-4 flex items-center justify-center">
        <div className="w-20 h-24 bg-yellow-400 flex items-center justify-center rounded-b-lg shadow-lg">
          <img
            src="/images/eagle-logo.png"
            alt="Eagles Cricket Club"
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
      <span className="text-xl font-bold ml-24">
        <span className="text-white">EAGLES</span>
        <span className="text-yellow-400">CC</span>
      </span>
    </div>
  );
};

export default Logo;