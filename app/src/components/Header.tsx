"use client"

import Link from 'next/link'
import { Button } from './Button'
import { Hash, Github, BookText } from 'lucide-react'

export function Header() {
  return (
    <header className="py-3 border-b">
      <nav className="m-auto flex w-full max-w-6xl items-center justify-between px-4">
        <Link href={"/"}>
          <h1 className="flex items-center text-2xl font-extrabold cursor-pointer transition-all">
            <Hash color="#10b981" strokeWidth={"2.5px"} />ReadGen{' '}
          </h1>
        </Link>
        <div className='flex items-center gap-4'>
          <Link href={"/docs"}>
            <Button className='hover:scale-105' childrenSide='left' variant="secundary" text="Docs" textSize="small">
              <BookText size={20} />
            </Button>
          </Link>
          <a target='_blank' href="https://google.com">
            <Button className='hover:scale-105' childrenSide='left' variant="black" text="GitHub" textSize="small">
              <Github size={20} />
            </Button>
          </a>
        </div>
      </nav>
    </header>
  )
}
