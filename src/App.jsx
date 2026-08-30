import "./App.css";
import FetchPosts from "./components/FetchPosts";

function App() {
  const domain = "http://localhost:3000";
  return (
    <>
      <FetchPosts domain={domain} />
    </>
  );
}

export default App;
