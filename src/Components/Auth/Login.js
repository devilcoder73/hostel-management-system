import LoginForm from "./LoginForm";

import "./Login.css";

const Login = () => {
  return (
    <main className="main-login">
      <section className="login-title">
        <h1>Indian Institute of Information Technology</h1>
      </section>
      <section className="login-form-section">
        <LoginForm />
      </section>
    </main>
  );
};

export default Login;
