import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const notify = () => toast("Wow so easy!");
  const { SingIn, handleGoogle, handleGithub } = useContext(AuthContext);
  const handleSingIn = event => {
    event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        SingIn(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);
            from.reset()
        })
        .catch(error =>{
            console.log(error);
            toast(error.message)

        })
  };
  const handleGoogleLogin = () =>{
    handleGoogle()
    .then(result =>{
      const log = result.user;
      console.log(log);
    })
    .catch(error => console.log(error))
  }
  const handleGithubLogin = () =>{
    handleGithub()
    .then(result =>{
      const log = result.user;
      console.log(log);
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="my-hero flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSingIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              <Link to="/register">
                <button className="btn btn-link -ml-3">
                  Create New Account
                </button>
              </Link>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-black ">
                    or
                  </span>
                </div>
                <button className="btn btn-primary mb-3 w-full" onClick={handleGoogleLogin}>Login in with Google</button>
                <button className="btn btn-primary w-full" onClick={handleGithubLogin}>Login in with Github</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
