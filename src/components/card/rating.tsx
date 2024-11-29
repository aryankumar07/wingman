import React from "react";
import { cn } from "../../utils/constant";
import { Star } from "lucide-react";

interface RatingProps {
  rating : number,
  classname? : string | '',
}

const Rating : React.FC<RatingProps> = ({
  rating,
  classname
})=>{
  return (
    <div className={cn('flex items-center',classname)}>
      <Star size={15} className={rating>=1 ? 'text-amber-800' : 'text-slate-600' }/>
      <Star size={15} className={rating>=2 ? 'text-amber-800' : 'text-slate-600' }/>
      <Star size={15} className={rating>=3 ? 'text-amber-800' : 'text-slate-600' }/>
      <Star size={15} className={rating>=4 ? 'text-amber-800' : 'text-slate-600' }/>
      <Star size={15} className={rating>=5 ? 'text-amber-800' : 'text-slate-600' }/>
    </div>
  )
}
export default Rating;