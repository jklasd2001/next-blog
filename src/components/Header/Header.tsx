import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className="sticky top-0 flex h-[56px] items-center border-b border-b-slate-900 border-opacity-10 backdrop-blur dark:border-b-slate-200 dark:border-opacity-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-[20px] font-semibold text-slate-700 dark:text-slate-200">
          기술 블로그
        </div>
        <div className="flex items-center gap-4">
          {theme === 'dark' ? (
            <SunIcon
              className="h-6 w-6 text-yellow-500"
              role="button"
              onClick={() => {
                setTheme('light')
              }}
            />
          ) : (
            <MoonIcon
              className="h-6 w-6 text-slate-700"
              role="button"
              onClick={() => {
                setTheme('dark')
              }}
            />
          )}

          <Link href={'/'}>
            <a className="text-[16px] font-semibold text-slate-700 dark:text-slate-200">
              About
            </a>
          </Link>
          <Link href={'/posts'}>
            <a className="text-[16px] font-semibold text-slate-700 dark:text-slate-200">
              Posts
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
