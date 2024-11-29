const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-10 h-10 border-4 border-t-transparent border-pink-500 rounded-full animate-spin-fast"></div>
        <div className="absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
