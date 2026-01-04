import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div 
      className={cn(
        'rounded-md my-4',
        'border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]',
        'bg-neutral-900/20 hover:bg-neutral-900/40 card-blur',
        ' p-2',
        className
      )}
    >
      {children}
    </div>
  )
}
