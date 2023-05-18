import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { useMatch } from 'react-router-dom'

export const DashBoard = (): JSX.Element => {
  const ischartspage = useMatch('/charts')
  const ismapspage = useMatch('/maps')
  return (
    <>
      <Header
        heading={ischartspage ? 'Charts' : ismapspage ? 'Maps' : 'Contacts'}
      />
      <Sidebar />
      <Outlet />
    </>
  )
}
