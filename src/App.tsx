import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import SearchPage from "./pages/searchPage";
import BoardgameDetailPage from "./pages/boardgameDetailPage";
import "./app.css";

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage/>} />
          <Route path="/boardgame/:boardgameId" element={<BoardgameDetailPage />} />
          <Route element={NoMatchRoute} />
        </Routes>
      </Router>
  );
};

export default App;