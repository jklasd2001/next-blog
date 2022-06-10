import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex h-[56px] items-center bg-[#dd9c4f] shadow-md">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">블로그입니당</div>
        <div className="flex gap-4 text-xl text-white">
          <Link href={'/'}>About</Link>
          <Link href={'/posts'}>Posts</Link>
        </div>
      </div>
    </header>
  )
}
