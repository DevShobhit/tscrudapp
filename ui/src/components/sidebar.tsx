import { Link } from 'react-router-dom'

export const Sidebar = (): JSX.Element => {
  return (
    <>
      <div className='w-screen z-10 fixed top-14 bg-[#f7f9fc] text-center transition-transform -translate-y-0 lg:hidden'>
        <div className='flex flex-row space-x-2 justify-center font-medium'>
          <Link to={'/contacts'}>
            <div className=' p-2 text-gray-900 rounded-lg  hover:bg-gray-100 '>
              Contacts
            </div>
          </Link>

          <Link to={'/charts'}>
            <div className=' p-2 text-gray-900 rounded-lg  hover:bg-gray-100 '>
              Charts
            </div>
          </Link>

          <Link to={'/maps'}>
            <div className=' p-2 text-gray-900 rounded-lg  hover:bg-gray-100 '>
              Maps
            </div>
          </Link>
        </div>
      </div>

      <aside className='fixed top-0 left-0 z-10 mt-10 pt-4 w-60 h-screen transition-transform -translate-x-full lg:translate-x-0'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50'>
          <div className='flex flex-col space-y-2 font-medium'>
            <Link to={'/contacts'}>
              <div className=' p-2 text-gray-900 rounded-lg  hover:bg-gray-100 '>
                Contacts
              </div>
            </Link>

            <Link to={'/charts'}>
              <div className=' p-2 text-gray-900 rounded-lg  hover:bg-gray-100 '>
                Charts
              </div>
            </Link>

            <Link to={'/maps'}>
              <div className=' p-2 text-gray-900 rounded-lg  hover:bg-gray-100 '>
                Maps
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
