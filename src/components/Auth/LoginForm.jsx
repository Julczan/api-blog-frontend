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
          throw new Error(errorData.message || "An error occurred");
        }
        return response.json();
      })
      .then((response) => setResponse(response))
      .catch((error) => {
        setError(error.message);
      });
  };

  // if (response) {
  //   saveTokenInLocalStorage;
  //   throw redirect("/");
  // }

  return (
    <>
      <form onSubmit={login}>
        <div class="form-group">
          <label for="username">Username</label>
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

        <div class="form-group">
          <label for="password">Password</label>
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

        <button type="submit" class="btn btn-primary btn-block">
          Log In
        </button>
      </form>

      <p class="form-footer">
        Don't have an account? <a href="/">Sign up</a>
      </p>
    </>
  );
}

export default LoginForm;
