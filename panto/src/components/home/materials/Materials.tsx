import Content from "./Content";
// import table_chairs from "@assets/materials/table-chairs.png";
import Images from "./Images";

const Materials = () => {
  return (
    <div className="mt-52 mb-50 flex items-center justify-between">
      <Content />
      {/* <img src={chairs} alt="" />
      <img src={half_sofa} alt="" /> */}
      {/* <img src={table_chairs} alt="" /> */}
      <Images />
    </div>
  );
};

export default Materials;
