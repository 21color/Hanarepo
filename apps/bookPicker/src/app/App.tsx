import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTE } from "@/app/constants/route";
import { Login } from "@/pages/login";
import { Home } from "../pages/home";
import { UserProvider } from "../pages/provier/userProvier";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.LOGIN} element={<Login />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
