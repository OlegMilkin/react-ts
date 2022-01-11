import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import UserItemPage from "./components/UserItemPage";
import TodosPage from "./components/TodosPage";
import TodosItemPage from "./components/TodosItemPage";
import OtherPage from "./components/OtherPage";

const App = () => {
  return (
      <div>
          <BrowserRouter>
              <nav>
                  <Link to="/users">Users</Link>
                  <Link to="/todos">Todos</Link>
                  <Link to="/other">Other</Link>
              </nav>
              <Routes>
                  <Route path={'/users'} element={<UsersPage/>} />
                  <Route path={'/users/:id'} element={<UserItemPage/>} />
                  <Route path={'/todos'} element={<TodosPage/>} />
                  <Route path={'/todos/:id'} element={<TodosItemPage/>} />
                  <Route path={'/other'} element={<OtherPage/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;
