import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Get from "./crud/Get";
import Post from "./crud/Post";
import Edit from "./crud/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Get />} />
          <Route path="/post" element={<Post />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
