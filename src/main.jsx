import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import HomePage from './components/HomePage'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
      {
        path: 'projects',
        element: <div>Projects</div>,
      },
      {
        path: 'resume',
        element: <div>Resume</div>,
      },
      {
        path: 'contact',
        element: <div>Contact me</div>,
      },
    ],

  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
