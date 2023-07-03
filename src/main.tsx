import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home, List, Dicas, Faq } from './routes';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './lib/redux/store';

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
        path: '/dicas',
        element: <Dicas/>,
      },
      {
        path: '/faq',
        element: <Faq/>,
      },
      {
        path: '/listas/:id',
        element: <List/>,
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
