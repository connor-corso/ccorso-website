import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Project from './projects/Project';


export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/projects' element={<Project />}>
            
          </Route>
          <Route path='/' element={<Home />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
    
    
  );
}

function Home() {
  return <h2>Home</h2>
}

function Navbar(){
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}