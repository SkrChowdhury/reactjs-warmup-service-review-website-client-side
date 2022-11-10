import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AddNewService from '../Pages/AddNewService/AddNewService';
import AddSer from '../Pages/AddSer/AddSer';
import Blog from '../Pages/Blog/Blog';
import Details from '../Pages/Details/Details';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyReview from '../Pages/MyReview/MyReview';
import Register from '../Pages/Register/Register';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',

        element: <Register></Register>,
      },
      {
        path: '/addService',
        element: <AddNewService></AddNewService>,
      },

      {
        path: '/addNewService',
        element: <AddSer></AddSer>,
      },

      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: 'orders',
        element: <MyReview></MyReview>,
      },
    ],
  },
]);
