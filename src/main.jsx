import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>,

      },
      {
        path: '/AppliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json'),// should not load all data , not a good practice
      },
      {
        path: '/Blog',
        element: <Blog></Blog>

      },
      {
        path: '/Job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/jobs.json'),

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
