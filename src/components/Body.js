import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'




const Body = () => {
 // const dispatch = useDispatch()
  //const navigate = useNavigate();

    const approuter = createBrowserRouter([
                 {
                    path: "/",
                    element: <Login/>
                 },
                 {
                    path: "/browse",
                    element: <Browse/>
                 }
    ])
   
  return (
    <div>
      {/* <Login/>
      <Browse/> */}
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
