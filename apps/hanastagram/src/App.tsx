import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LOGIN, HOME, FEED, MYPAGE, ERROR } from "@/constants/routes";
import { Login, Home, Mypage, Feed, ErrorPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path={LOGIN} element={<Login />} />
      <Route path={HOME} element={<Home />} />
      <Route path={FEED} element={<Feed />} />
      <Route path={MYPAGE} element={<Mypage />} />
      <Route path={ERROR} element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
