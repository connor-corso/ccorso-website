import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

import Navbar from 'components/navbar/Navbar';
import Project from 'projects/Project';


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

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>
    </Router>
    
    
  );
}

function Home() {
  return <h2>Home</h2>
}
