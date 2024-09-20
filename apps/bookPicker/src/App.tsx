import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTE } from "@/_shared/constants/route";
import { Login } from "@/pages/login";

function App() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<div>home</div>} />
      <Route path={ROUTE.LOGIN} element={<Login />} />
    </Routes>
  );
}

export default App;
