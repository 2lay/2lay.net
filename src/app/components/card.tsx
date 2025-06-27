import { cn } from "@/lib/utils"

export default function Card({ children, className, color, style }: { children: React.ReactNode, className?: string, color?: string, style?: React.CSSProperties }) {
  return (
    <div className={cn(`bg-neutral-900/80 ${color ? `border-[${color}]` : 'border-pink-500'} border-1 m-4 p-2`, className)} style={style}>
      {children}
    </div>
  )
}
