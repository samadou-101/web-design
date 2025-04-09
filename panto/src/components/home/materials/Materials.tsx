import Content from "./Content";
// import table_chairs from "@assets/materials/table-chairs.png";
import Images from "./Images";

const Materials = () => {
  return (
    <div className="mt-48 mb-48 flex flex-col-reverse items-center gap-18 max-md:mt-32 lg:flex-row lg:justify-between">
      <Content />
      <Images />
    </div>
  );
};

export default Materials;
