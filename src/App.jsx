import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./UI/Login";
import Register from "./UI/Register";
import { MyContext } from "./AuthContext/authContext";
import { useState } from "react";
import { db } from "./Firebase/firebase"; // must be imported here as a file is complied.
import Screen2 from "./SampleScreens/UserScreens/SuperUserScreens/Screen2";
import Screen1 from "./SampleScreens/UserScreens/SuperUserScreens/Screen1";
import Home from "./SampleScreens/Home";
import User2Screen1 from "./SampleScreens/UserScreens/user2Screens/User2Screen1";
import User3Screen2 from "./SampleScreens/UserScreens/user3Screens/User3Screen2";
import User2Screen2 from "./SampleScreens/UserScreens/user2Screens/User2Screen2";
import User3Screen1 from "./SampleScreens/UserScreens/user3Screens/User3Screen1";

function App() {
  const [UserInfoFB, setUserInfoFB] = useState("no user");
  return (
    <>
      <MyContext.Provider value={{ UserInfoFB, setUserInfoFB }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* screens allowed by super user...continued... */}
            <Route path="/screen1" element={<Screen1 />} />
            <Route path="/screen2" element={<Screen2 />} />
            {/* <Route path="/screen3" element={<Screen3 />} />
            <Route path="/screen4" element={<Screen4 />} />
            <Route path="/screen5" element={<Screen5 />} /> */}
            {/* Screens */}
            <Route path="/User2Screen1" element={<User2Screen1 />} />
            <Route path="/User2Screen2" element={<User2Screen2 />} />
            <Route path="/User3Screen1" element={<User3Screen1 />} />
            <Route path="/User3Screen2" element={<User3Screen2 />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
