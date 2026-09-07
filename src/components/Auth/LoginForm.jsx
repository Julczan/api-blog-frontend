import { useState } from "react";

function LoginForm({ domain }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const login = async (e) => {
    setLoading(true);
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
      .then((response) => setResponse(response))
      .catch((error) => {
        console.log(error);

        setError(error.msg);
      });
  };

  // if (response) {
  //   saveTokenInLocalStorage;
  //   throw redirect("/");
  // }

  return (
    <>
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
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Log In
        </button>
      </form>

      <p className="form-footer">
        Don't have an account? <a href="/">Sign up</a>
      </p>
    </>
  );
}

export default LoginForm;
