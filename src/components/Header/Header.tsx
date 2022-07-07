import { useTheme } from 'next-themes'
import Link from 'next/link'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className="flex h-[56px] items-center shadow-lg">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">블로그입니당</div>
        <div className="flex gap-4 text-xl text-[#060b11]">
          <button
            onClick={() => {
              setTheme('light')
            }}
          >
            Light Mode
          </button>
          <button
            onClick={() => {
              setTheme('dark')
            }}
          >
            Dark Mode
          </button>

          <Link href={'/'}>About</Link>
          <Link href={'/posts'}>Posts</Link>
        </div>
      </div>
    </header>
  )
}
