import * as React from "react";
import Button from "@mui/material/Button";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
      <>
        <Router>
       <nav className="sticky-nav">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/about" className="nav-link">
                    About
                </Link>
                <Link to="/profile" className="nav-link">
                    Profile
                </Link>
          </nav>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Profile />
                            <div>
                                Test header for button
                                <MyButton />
                            </div>
                            <div>Suggested change: test-branch to master</div>
                        </div>
                    }
                />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
        <Button variant="contained">Hello world</Button>
      </>
 
    );
}

function MyButton() {
    return (
        <button onClick={() => console.log("Button clicked!")}>Click me</button>
    );
}

function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <p>This is the about page</p>
        </>
    );
}

function Profile() {
    return (
        <>
            <img
                src="https://i.imgur.com/MK3eW3As.jpg"
                alt="Katherine Johnson"
            />
        </>
    );
}

export default App;
