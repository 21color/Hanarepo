import { ERROR, FEED, HOME, LOGIN, MYPAGE } from "@/constants/routes";
import 'normalize.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorPage, Feed, Home, Login, Mypage } from "./pages";

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
