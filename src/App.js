import React from 'react'
import ProfileComponent from './component/ProfileComponent'
import { DataContextProvider } from './Context/DataContext'


const App = () => {
  return (
    <DataContextProvider>
      <div className=' bg-black h-full w-full flex items-center justify-center'>
        <ProfileComponent />
      </div>
    </DataContextProvider>
  )
}

export default App