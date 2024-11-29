import { LucideIcon } from "lucide-react"
import React from "react"

interface ButtonProps {
  label : string,
  icon?: LucideIcon,
  onClick:()=>void
}


const Button : React.FC<ButtonProps> = ({
  label : _label,
  icon : _icon,
  onClick : _onClick
})=>{
  return (
    <div className="p-1 w-full">
      <div className="flex items-center justify-center  bg-foreground text-background p-1 h-10">
        {_label}
      </div>
    </div>
  )
}

export default Button;