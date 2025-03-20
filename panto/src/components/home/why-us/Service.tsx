import { FC } from "react";

interface IService {
  title: string;
  content: string;
}
const Service: FC<IService> = ({ title, content }) => {
  return (
    <div className="flex flex-col">
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        <span>More Info</span>
        <span>-----&gt;</span>
      </div>
    </div>
  );
};

export default Service;
