import React from "react";
import { useNavigate } from "react-router-dom";

const User3Screen1 = () => {
  const navigate = useNavigate();
  const moveTo = () => {
    navigate("/");
  };
  let userID = localStorage.getItem("userInformation");
 
  return (
    <>
      <div>
        {userID.includes("user-1") || userID.includes("user-3") ? (
          "Welcome to the screen User1 || User3 Screen1"
        ) : (
          <>
            You are not allowed - Click Move
            <button
              onClick={moveTo}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span class="sr-only"></span>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default User3Screen1;
