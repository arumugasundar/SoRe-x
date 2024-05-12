import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    suffix?: React.ReactNode
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, ...props }, ref) => {
    return (
      <div 
        // className="flex gap-2 items-center"
        // className="flex gap-2 items-center"
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
          "flex gap-2 items-center"
        )}
      >
        <input
          className={cn(
            "flex h-9 w-full bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            // className,
            "flex gap-2 items-center"
          )}
          type={type}
          ref={ref}
          {...props}
          autoComplete="off"
        />
        {suffix}
      </div>
      
    )
  }
)
Input.displayName = "Input"

export { Input }
