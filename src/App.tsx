import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './AllRoutes';


function App() {


  return (
    <>


      <RouterProvider router={router} />

    </>
  )
}

export default App
