import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route } from 'react-router-dom'
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Github, { GithubinfoLoader } from './components/Github/Github.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
// const router = createBrowserRouter([{
//   path :'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     }
//     ,{
//       path:"about",
//       element:<AboutUs/>
//     }
//     ,{
//       path:"contact",
//       element:<Contact/>
//     }
//   ]}
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
            <Route path="about" element={<AboutUs/>}/>
                <Route path="contact" element={<Contact/>}/>
            <Route path='user/:userid' element={<User/>}/>
                        <Route loader={GithubinfoLoader} path='github' element={<Github/>}/>
                        






      </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
