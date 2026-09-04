import { useState } from "react";
import { Link } from "react-router";

function SignUpForm({ domain }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const signUp = async (e) => {
    setLoading(true);
    e.preventDefault();

    const route = "/user/signup";

    fetch(domain + route, {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        confirmPassword,
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
      })
      .finally(() => setLoading(false));
  };

  // if(response){
  // if(response === "User created!"){
  //  return ()<p>User created successfully! Please login here:
  //  <Link to=/login>Login</Link>
  //  </p>
  // }else{
  // return <>{response}</>}
  // }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {response && <p>{response}</p>}
      <form name="form" onSubmit={signUp}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="coolcoder99"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>

      <p className="form-footer">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </>
  );
}

export default SignUpForm;
