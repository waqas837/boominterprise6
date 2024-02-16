import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { MyContext } from "../AuthContext/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [UserInfo, setUserInfo] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { UserInfoFB, setUserInfoFB } = useContext(MyContext);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        let uid = user.uid;
        setUserInfoFB({ uid, email: user.email, userIsLoggedIn: true });
        localStorage.setItem("userInformation", user.email)
        // localStorage.setItem("userInformation", {
        //   uid,
        //   email: user.email,
        //   userIsLoggedIn: true,
        // });
        console.log("You are loggedIn", uid, user.email);
        // navigate("/")
      } else {
        setUserInfoFB(null);
        localStorage.removeItem("userInformation");
        console.log("User is not loggedin");
      }
    });
  }, []);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      let uid = user.uid;
      setUserInfoFB({ uid, email: user.email, userIsLoggedIn: true });
      console.log("You are loggedIn", uid, user.email);
    } else {
      console.log("User is not loggedin");
    }
  });

  // if user is loggedin
  const [isUser, setisUser] = useState();
  // Login onsubmit
  const Login = async (e) => {
    e.preventDefault();
    if (!UserInfo.email || !UserInfo.password) {
      toast.error("Fill all fields");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, UserInfo.email, UserInfo.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        toast.success("Signed In successfully");
        navigate("/");
        console.log("user success deatils", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${(errorCode, errorMessage)}`);
        console.log("Error", errorCode, errorMessage);
      });
  };
  //  forgotPassword
  const forgotPassword = async () => {
    try {
      const auth = getAuth();
      const email = prompt("Please enter your email");
      await sendPasswordResetEmail(auth, email);
      toast.success("Email sent please check your inbox");
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  // on auth change
  const onauthStateChange = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setisUser({ id: user.id, email: user.email });
      } else {
        // may user is logged Out
        setisUser(null);
      }
    });
  };
  return (
    <div>
      <Toaster />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={Login}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => {
                      setUserInfo({ ...UserInfo, email: e.target.value });
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setUserInfo({ ...UserInfo, password: e.target.value });
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <a
                    onClick={forgotPassword}
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
