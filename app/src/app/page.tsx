import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className='h-full'>
      <Header />
      <main className='grid grid-cols-5 h-[calc(100%-71px)] p-4 rounded-lg gap-4'>
        <div className='h-full rounded-lg p-4 bg-green-500'>Sections Container</div>
        <div className='h-full rounded-lg p-4 bg-red-500 col-span-2'>Campos para preencher</div>
        <div className='h-full rounded-lg p-4 bg-blue-500 col-span-2'>Preview</div>
      </main>
    </div>
  )
}
