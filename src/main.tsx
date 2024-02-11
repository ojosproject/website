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
import News from './routes/news/newsWithId';
import { getNewsContent } from "./routes/news/backend";
import Join from './routes/join';
import NewsStand from './routes/news/newsWithoutId';

// ! If you're going to update, please check if
// ! src/components/Header.tsx
// ! also needs to update
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/news/",
    element: <NewsStand />
  },
  {
    path: "/news/:newsId",
    element: <News />,
    // as any because it doesn't like newsLoader
    loader: async ({ params }: { params: {newsId: string} }) => {
      const news = await getNewsContent(params.newsId);
      return { news };
    },
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
