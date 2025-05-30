import { FaCircleNodes, FaFilter } from "react-icons/fa6";

const Filters = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="border text-sm rounded-lg px-4 py-2 flex items-center gap-2 bg-gray-9 text-white hover:bg-gray-2 hover:text-gray-700">
        <FaFilter />
        <span className="font-bold text-sm">All Filters</span>
      </button>
      <button className="border text-sm rounded-lg px-4 py-2 flex items-center gap-2 bg-gray-9 text-white hover:bg-gray-4 hover:text-gray-700">
        <FaCircleNodes />
        <span className="font-bold text-sm">Types</span>
      </button>
    </div>
  );
};

export default Filters;
