import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "./reset.css";
function Reset() {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <>
    <div className="container-fluid text-center p-2">
      <small className="text-muted">Welcome to </small>

        <h1>
            Lib.Unlock
        </h1>
      </div>
    <div className="reset p-5">
      <div className="reset__container rounded">
      <span className="text-light h1 text-center mb-4">Reset Secret Key</span>
        <input
          type="text"
          className="reset__textBox rounded-pill"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Lib.id(e-mail)"
        />
        <button
          className="btn btn-violet rounded-pill mt-3 mb-3"
          onClick={() => sendPasswordReset(email)}
        >
          Send passkey reset email
        </button>
        <div className="text-light">
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
    <div class="jumbotron fixed-bottom navbar-dark bg-black p-2">
           <div className="text-center text-light">
            <a className="text-light" href="/">Gateway to Librepo</a>
            </div>
    </div>
    </>
  );
}
export default Reset;