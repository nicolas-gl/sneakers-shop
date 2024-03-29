import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import App from './App';
import Main from './Components/Main';
import Favorites from './Components/Favorites';
import Orders from './Components/Orders';


const AppContext = React.createContext({});
export default AppContext;


const router = createBrowserRouter([
  {
    path: "/sneakers-shop/",
    element: <App />,
    // errorElement: <ErrorPage />,
    errorElement:
      <div>ошибка 404. Страница в разработке
        <Link to={`/`}><button>Go to main page</button></Link>
      </div>,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/sneakers-shop/favorites",
        element: <Favorites />,
      },
      {
        path: "/sneakers-shop/orders",
        element: <Orders />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
