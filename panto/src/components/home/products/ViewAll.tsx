import { HiArrowLongRight } from "react-icons/hi2";

const ViewAll = () => {
  return (
    <div className="text-star mt-[3.75rem] flex items-center rounded-md px-4 py-2">
      <span className="text-lg font-medium">View All</span>
      <span className="ml-2">
        <HiArrowLongRight size={30} />
      </span>
    </div>
  );
};

export default ViewAll;
