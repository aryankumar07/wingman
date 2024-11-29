import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export interface Iitems {
  category : string,
  description : string,
  id : number,
  image : string,
  price : number,
  rating : {
    count : number,
    rate : number
  }
  title : string
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
