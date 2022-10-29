import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Layout, Home, Pokemon, Search, NoMatch } from "./routes";
import "./routes/general.css";


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<Pokemon />} />
          <Route path="search" element={<Search />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
