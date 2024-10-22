import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsPage from "./pages/news";

function App() {
  return (
    <>
      <h1>hello</h1>
      <ul>
        <li>
          <Link to={"/"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/news"}>News</Link>
        </li>
      </ul>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
