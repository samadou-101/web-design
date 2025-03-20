import { FC } from "react";

interface IService {
  title: string;
  content: string;
}
const Service: FC<IService> = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-2 self-center">
      <h2 className="text-2xl font-bold">{title} </h2>
      <p className="">{content}</p>
      <div className="flex">
        <span className="text-coragne text-sm">More Info</span>
        <span className="text-coragne text-sm">-----&gt;</span>
      </div>
    </div>
  );
};

export default Service;
