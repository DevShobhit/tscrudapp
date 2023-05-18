import { Heading } from '../interfaces/heading'

export const Header = ({ heading }: Heading): JSX.Element => {
  return (
    <div className='w-screen h-[60px] z-10 bg-[#f7f9fc] fixed text-center '>
      <h1 className='ml-5 text-3xl font-bold mr-5 sm:text-4xl '>{heading}</h1>
    </div>
  )
}
