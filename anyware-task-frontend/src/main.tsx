import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminAnnouncement from './components/adminAnnouncement/index.tsx'
import Edit from './components/edit/index.tsx';
import AdminQuiz from './components/adminQuiz/index.tsx';
import EditQuiz from './components/editquiz/index.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/admin/announcement',
    element:<AdminAnnouncement />

  },
  {
    path:'/editannouncement/:id',
    element:<Edit />
  },
  {
    path :'/admin/quiz',
    element:<AdminQuiz />
  },
  {
    path:'/editquiz/:id',
    element:<EditQuiz />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </React.StrictMode>,
)
