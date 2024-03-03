import { ReactNode } from 'react'

interface ButtonProps {
  text?: string
  textSize?: 'smaller' | 'small' | 'base' | 'large' | 'big'
  variant?: 'primary' | 'secundary' | 'black' | 'danger'
  children?: ReactNode
  className?: string
  childrenSide?: 'left' | 'right'
}

export function Button({
  text,
  textSize = 'base',
  childrenSide = 'right',
  className,
  children,
  variant = 'primary',
}: ButtonProps) {

  const buttonVariantsClasses = {
    primary: 'bg-blue-600 hover:bg-blue-800 text-white',
    secundary: 'bg-[#fafafa] hover:bg-zinc-200/50 border text-zinc-950',
    black: 'text-white bg-zinc-900 hover:bg-zinc-700',
    danger: 'bg-red-600 hover:bg-red-800 text-white',
  }

  const textSizeVariants = {
    smaller: 'text-xs',
    small: 'text-sm',
    base: 'text-base',
    large: 'text-xl',
    big: 'text-3xl',
  }

  return (
    <button
      className={`flex items-center gap-1 rounded-lg px-5 py-3 font-medium transition-all ${buttonVariantsClasses[variant]} ${textSizeVariants[textSize]} ${className}`}
    >
      {childrenSide === 'left' ? children : null}
      {text}
      {childrenSide === 'right' ? children : null}
    </button>
  )
}
