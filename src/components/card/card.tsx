import React from "react";
import { Iitems } from "../../utils/constant";
import Rating from "./rating";
import Button from "../button";

interface CardProps {
  items: Iitems;
}

const Card: React.FC<CardProps> = ({ items }) => {
  return (
    <div className="max-h-[60vh] group cursor-pointer border border-foreground grid grid-rows-4 rounded-md p-4 md:p-3">
      {/* Image Section */}
      <div className="row-span-3 overflow-hidden rounded-lg">
        <img
          src={items.image}
          alt="Image"
          className="h-full w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Text and Rating Section */}
      <div className="row-span-1 flex flex-col items-start justify-start w-full space-y-2">
        <div className="flex items-center justify-between w-full">
          <p
            className="text-foreground max-w-[10rem] md:max-w-[10rem] overflow-hidden text-ellipsis whitespace-nowrap"
            title={items.title}
          >
            {items.title}
          </p>
          <Rating rating={items.rating.rate} classname="ml-2" />
        </div>

        <div className="font-semibold text-sm">
          Price: <span className="font-bold text-lg">${items.price}</span>
        </div>
        <Button
          label="ADD To Cart"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Card;
