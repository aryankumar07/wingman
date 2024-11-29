import { LucideIcon } from "lucide-react"
import React from "react"
import { cn } from "../utils/constant"

interface ButtonProps {
  label : string,
  icon?: LucideIcon,
  onClick:()=>void
  classname? : string | ''
}


const Button : React.FC<ButtonProps> = ({
  label : _label,
  icon : _icon,
  onClick : _onClick,
  classname : _classname
})=>{
  return (
    <div className={cn('p-1', _classname)}>
      <div className="flex items-center justify-center  bg-foreground text-background p-1 h-10">
        {_label}
      </div>
    </div>
  )
}

export default Button;