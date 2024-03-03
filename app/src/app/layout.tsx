import type { Metadata } from 'next'

import localFont from 'next/font/local'

import './globals.css'
const monaSans = localFont({ src: '../../public/Mona-Sans.ttf' })

export const metadata: Metadata = {
  title: 'ReadGen » luizfranzon.dev',
  description: 'An app to generated a custom README for your GitHub projects!',
  icons: ["./favicon.png"]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${monaSans.className} bg-[#fafafa] text-zinc-950 selection:bg-[#22C55E]/40 h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
