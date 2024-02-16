// import React, { createContext, useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


// export const AuthContext = createContext(); // Export the context

// export const Auth = ({ children }) => {
// //   const AuthContext = React.createContext();
//   const [currentUser, setCurrentUser] = useState();
//   const [userLoggedIn, setUserLoggedIn] = useState();
//   const [loading, setLoading] = useState(true); // Initially set loading to true

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, initializeUser);
//     return unsubscribe;
//   }, []);

//   async function initializeUser(user) {
//     if (user) {
//       console.log("WE HAVE THE USER", user.email);
//       setCurrentUser(user.email);
//       setUserLoggedIn(true);
//     } else {
//       setCurrentUser(null);
//       setUserLoggedIn(false);
//     }
//     setLoading(false); // Set loading to false after user initialization
//   }

//   async function logoutUser() {
//     const auth = getAuth();
//     try {
//       await signOut(auth);
//       console.log("User signed out successfully");
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   }

//   const value = { currentUser, userLoggedIn, loading, logoutUser };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default Auth;
