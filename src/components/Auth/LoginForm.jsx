import { useState } from "react";
import { Link, useNavigate } from "react-router";

function LoginForm({ domain }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveTokenToLocalStorage = (token) => {
    localStorage.setItem("Authorization", `bearer ${token}`);
  };

  const login = async (e) => {
    setLoading(true);
    setError(null);
    e.preventDefault();

    const route = "/user/login";

    fetch(domain + route, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.status >= 400) {
          const errorData = await response.json();
          return Promise.reject(errorData);
        }
        return response.json();
      })
      .then((response) => {
        saveTokenToLocalStorage(response.token);
        return navigate("/");
      })
      .catch((error) => {
        setError(error.msg);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && error}
      <form name="form" onSubmit={login}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="coolcoder99"
            type="text"
            autoComplete="no"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            type="password"
            autoComplete="no"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Log In
        </button>
      </form>

      <p className="form-footer">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </>
  );
}

export default LoginForm;
