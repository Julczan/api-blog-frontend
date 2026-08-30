import App from "./App";
import Post from "./components/Post/Post";

const domain = "http://localhost:3000";

const routes = [
  {
    path: "/",
    element: <App domain={domain} />,
  },
  {
    path: "/posts/:postId",
    element: <Post domain={domain} />,
  },
];

export default routes;
