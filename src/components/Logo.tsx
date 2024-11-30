const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-10 h-10 bg-yellow-400 flex items-center justify-center mr-2 rounded">
        <img
          src="/images/eagle-logo.png"
          alt="Eagles Cricket Club"
          className="w-8 h-8 object-contain"
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