import { FC } from "react";

interface IProductCard {
  imgUrl: string;
}

const ProductCard: FC<IProductCard> = ({ imgUrl }) => {
  return <div className="bg-glass absolute -top-1/3 h-full w-1/5"></div>;
};

export default ProductCard;
