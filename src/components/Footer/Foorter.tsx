import { AiFillGithub, AiFillMail } from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer className="bg-[#060b11]">
      <div className="container mx-auto flex flex-col items-center py-10 text-[#ffffff7a]">
        <div className="flex">
          <AiFillGithub size={48} />
          <AiFillMail size={48} />
        </div>

        <div>{`© YoungSu Kim • ${new Date().getFullYear()}`}</div>
      </div>
    </footer>
  )
}
