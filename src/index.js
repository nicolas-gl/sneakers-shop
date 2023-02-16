import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Main from './Components/Main';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Test from './Components/Test';


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
        element: <Test />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/favorites",
    element: <div>
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
