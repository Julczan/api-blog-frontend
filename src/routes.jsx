import App from "./App";
import SignUpForm from "./components/Auth/SignUpForm";
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
  {
    path: "/signup",
    element: <SignUpForm domain={domain} />,
  },
];

export default routes;
