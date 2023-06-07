import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Initial, Home } from './routes';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './lib/redux/store';
import BodyList from './components/BodyList';

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
      {
        path: '/listas/:id',
        element: <BodyList/>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
