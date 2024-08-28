import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
        path:'/About',
        element:<About ></About>
      }
    ]


  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
