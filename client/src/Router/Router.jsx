import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Createjob from '../Pages/Createjob'
import MyJobs from '../Pages/MyJobs'
import SalaryPage from '../Pages/SalaryPage'


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
      }


    ]
  }
])

export default router
