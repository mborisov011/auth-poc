import React from "react";
import Home from "./Components/Home";
import Users from "./Components/Users";
import About from "./Components/About";
import Unouth from "./Components/Unouth";
import Nav from "./Components/Nav";
import ProtectedRoute from "./Components/ProtectedRoute";
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Auth0ProviderWithHistory>
          <div>
            <Nav />

            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/unouth" element={<Unouth />} />
              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <Routes>
                      <Users />
                    </Routes>
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/users" element={<ProtectedRoute element={<Users />} />} /> */}
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          </Auth0ProviderWithHistory>
      </Router>
    </div>
  );
}

export default App;
