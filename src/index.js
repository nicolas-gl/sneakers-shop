import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import App from './App';
import Main from './Components/Main';
import Test from './Components/Test';
import Favorites from './Components/Favorites';
import Orders from './Components/Orders';


const AppContext = React.createContext({});
export default AppContext;


const router = createBrowserRouter([
  {
    path: "/",
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
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/test",
    element: 
      <div>
        <Test/>
        <b>This is test page</b>
        <Link to={`/`}><button>Go to main page</button></Link>
      </div>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
