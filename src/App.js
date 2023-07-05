import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true 로그인 false 로그아웃
  useEffect(() => {
    console.log("로그인");
  }, [authenticate]); // 의존성배열에 값이 있을 때 그 값이 바뀔 때 마다 함수가 다시 실행
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />

        <Route
          path="/Login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </>
  );
}

export default App;
