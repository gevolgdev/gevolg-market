import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Initial, Home } from './routes';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/initial',
        element: <Initial/>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
