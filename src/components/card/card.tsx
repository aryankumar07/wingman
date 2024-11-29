import React from "react"
import { Iitems } from "../../utils/constant"
import Rating from "./rating"
import Button from "../button"

interface CardProps {
  items : Iitems
}

const Card : React.FC<CardProps> = ({
  items
})=>{
  return (
    <div className="max-h-[60vh] group cursor-pointer border border-foreground grid grid-flow-row grid-rows-4 rounded-md">
      <div className="row-span-3 object-contain overflow-hidden rounded-lg ">
        <img
          src={items.image}
          alt="Image"
          className="flex h-full w-full object-scale-down transition-all group-hover:scale-110"
        />
      </div>
      <div className="row-span-1 flex flex-col items-start justify-start">
        <div className="flex items-center justify-between w-full">
          <p
            className="text-foreground ml-1 max-w-96 md:w-40 h-10 overflow-hidden text-ellipsis whitespace-nowrap"
            title={items.title}
          >
            {items.title}
          </p>
          <Rating rating={items.rating.rate} classname="mr-1" />
        </div>
        <div className="font-semibold ml-1">
          Price <span className="font-bold text-lg"> ${items.price} </span>
        </div>
        <Button label="ADD To Cart" onClick={()=>{}}/>
      </div>
    </div>
  );
}
export default Card