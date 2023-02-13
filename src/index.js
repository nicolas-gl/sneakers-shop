import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    errorElement:
      <div>ошибка 404. Страница в разработке
        <Link to={`/`}><button>Go to main page</button></Link>
      </div>,
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
    {/* <App /> */}
  </React.StrictMode>
);
