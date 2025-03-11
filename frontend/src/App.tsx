import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Exercises from "./pages/Exercise";
import About from "./pages/About";
import Album from "./pages/album";
import Community from "./pages/community";
import PrivacyPolicy from "./pages/privacy";
import ForgotPassword from "./pages/forgotPassword";
import { AuthProvider } from "./context/AuthContext";
import Individuals from "./pages/Individuals";
import Trainers from "./pages/Trainers";
import HR from "./pages/HR";

import Profile from "./pages/profile";

import EmotionWheel from "./pages/exercise/EmotionWheel";
import EmotionWheel2 from "./pages/exercise/EmotionWheel2";
import EmotionWheel3 from "./pages/exercise/EmotionWheel3";
import EmotionWheel4 from "./pages/exercise/EmotionWheel4";
import EmotionWheel5 from "./pages/exercise/EmotionWheel5";
import VideoWalkthrough from "./pages/exercise/VideoWalkthrough";
import Reflection1 from "./pages/exercise/Reflection1";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercise" element={<Exercises />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/album" element={<Album />} />
          <Route path="/community" element={<Community />} />
          <Route path="/terms" element={<PrivacyPolicy />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/individuals" element={<Individuals />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/emotionwheel" element={<EmotionWheel />} />
          <Route path="/emotionwheel2" element={<EmotionWheel2 />} />
          <Route path="/emotionwheel3" element={<EmotionWheel3 />} />
          <Route path="/emotionwheel4" element={<EmotionWheel4 />} />
          <Route path="/emotionwheel5" element={<EmotionWheel5 />} />
          <Route path="/videowalkthrough" element={<VideoWalkthrough />} />
          <Route path="/Reflection1" element={<Reflection1 />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
