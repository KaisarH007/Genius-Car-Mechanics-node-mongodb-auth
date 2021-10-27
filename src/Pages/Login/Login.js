import React from "react";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { handleGoogleSignIn } = useAuth();
  return (
    <div>
      <h1>Please Log In</h1>
      <h4>Hello </h4>

      <button onClick={handleGoogleSignIn} className="btn btn-danger">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
