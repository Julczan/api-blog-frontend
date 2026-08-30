import "./App.css";
import PostList from "./components/PostList/PostList";

function App({ domain }) {
  return (
    <>
      <PostList domain={domain} />
    </>
  );
}

export default App;
