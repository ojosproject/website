// main.tsx
// Ojos Project
// 
// Keep an eye on `router` and make sure it stays updated!
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import Root from './routes/root';
import News, {loader as newsLoader} from './routes/news/newsWithId';
import Join from './routes/join';

// ! If you're going to update, please check if
// ! src/components/Header.tsx
// ! also needs to update
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/news/:newsId",
    element: <News />,
    // not sure why this is in red yet
    loader: newsLoader,
  },
  {
    path: "/join-us/",
    element: <Join />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
