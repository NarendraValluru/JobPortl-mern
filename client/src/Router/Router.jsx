import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Createjob from '../Pages/Createjob'
import MyJobs from '../Pages/MyJobs'
import SalaryPage from '../Pages/SalaryPage'
import UpdateJob from '../Pages/UpdateJob'
import Login from '../components/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/',element: <Home /> },
      {path: '/about',element: <About />},
      {path: '/post-job', 
        element: <Createjob />
      },
      {path: '/my-job', 
        element: <MyJobs/>
      },
      {path: '/salary', 
        element: <SalaryPage/>
      },
      {path: '/edit-job/:id', 
        element: <UpdateJob />,
        loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
      }

    ],
  },
  {
    path:'/login',
    element: <Login />
  }
]);

export default router
