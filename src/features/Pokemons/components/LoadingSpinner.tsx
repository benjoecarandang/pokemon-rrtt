const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-173px)]">
      <div className="relative w-24 h-24 rounded-full bg-white border-4 border-black overflow-hidden animate-spin">
        {/* Top Red Half */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500" />

        {/* Black Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-[8%] bg-black transform -translate-y-1/2" />

        {/* White Circle in the Center */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white border-4 border-black rounded-full transform -translate-x-1/2 -translate-y-1/2">
          {/* Inner Black Circle */}
          <div className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
