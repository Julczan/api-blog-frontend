import App from "./App";
import SignUpForm from "./components/Auth/SignUpForm";
import LoginForm from "./components/Auth/LoginForm";
import ErrorPage from "./components/ErrorPage";
import Post from "./components/Post/Post";
import Comment from "./components/CommentList/Comment";

const domain = import.meta.env.DOMAIN;

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
  {
    path: "/login",
    element: <LoginForm domain={domain} />,
  },
  {
    path: "/posts/:postId/comments/:commentId",
    element: <Comment domain={domain} />,
  },
];

export default routes;
