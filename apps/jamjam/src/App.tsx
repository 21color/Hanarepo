import { HOME, TODO_LIST } from "@/constants/routes";
import '@hanarepo/styles';
import 'normalize.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, TodoList } from './pages';

function App() {
  return (
    <Routes>
      <Route path={TODO_LIST} element={<TodoList />} />
      <Route path={HOME} element={<Home />} />
    </Routes>
  );
}

export default App;
