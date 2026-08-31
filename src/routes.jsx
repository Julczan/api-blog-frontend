import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Post from "./components/Post/Post";

const domain = "http://localhost:3000";

const routes = [
  {
    path: "/",
    element: <App domain={domain} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:postId",
    element: <Post domain={domain} />,
  },
];

export default routes;
