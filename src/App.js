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
import SelfhostedServices from 'selfhostedServices/SelfhostedServices';


export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            
          <Route path='/projects' element={<Project />} />
        
          <Route path='/' element={<Home />} />
          
          <Route path='/selfhosted' element={<SelfhostedServices />} />

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>
    </Router>
    
    
  );
}

function Home() {
  return <h2>Home</h2>
}
