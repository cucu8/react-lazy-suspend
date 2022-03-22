import './App.css';
import React, { Suspense } from "react";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home';
const About = React.lazy(() => import("./pages/About.js"))
const Contact = React.lazy(() => import("./pages/Contact.js"))

console.log(About)

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
