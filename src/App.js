import Header from "./components/Header";
import Home from "./components/Home";
import Skymap from "./components/Skymap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Photos from "./components/Photos";
import News from "./components/News";
import Chat from "./components/Chat";
import Events from "./components/Events"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={< Events/>} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/skymap" element={<Skymap />} />
          <Route path="/news" element={<News />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
