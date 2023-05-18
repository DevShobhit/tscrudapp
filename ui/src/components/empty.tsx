import CircledCross from '../assets/svgs/close'

export const Empty = ({ text }: { text: string }): JSX.Element => {
  return (
    <>
      <div className='p-2 flex flex-col rounded-lg bg-white border-2 md:max-w-xl md:flex-row items-center'>
        <CircledCross />

        <div className='p-6'>
          <p className='mb-4 text-lg'>
            No {text}s found.
            <br /> Please add {text} from
            <br /> Create {text} Button.
          </p>
        </div>
      </div>
    </>
  )
}
