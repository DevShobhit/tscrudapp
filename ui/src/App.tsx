import { DashBoard } from './pages/dashboard'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Contacts } from './containers/contact/contacts'
import { Charts } from './containers/charts'
import { Maps } from './containers/maps'

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/contacts' />} />

          <Route path='/contacts' element={<DashBoard />}>
            <Route index element={<Contacts />} />
          </Route>

          <Route path='/charts' element={<DashBoard />}>
            <Route index element={<Charts />} />
          </Route>

          <Route path='/maps' element={<DashBoard />}>
            <Route index element={<Maps />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
