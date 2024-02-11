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

    // ? Regarding ESLint:
    // ? This is this way because `loader` requires LoaderFunction<any> type
    // ? I haven't figured out how to make this work.
    // ? For now, disabling eslint to allow the GL pipeline to move forward is our solution

  {
    path: "/news/:newsId",
    element: <News />,
    /* eslint-disable */
    loader: async ({ params }: { params: {newsId: string} }) => {
        const news = await getNewsContent(params.newsId);
        return { news };
      },
    } as any,
    /* eslint-enable */

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
