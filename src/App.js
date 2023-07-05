import * as React from 'react';
import Box from '@mui/material/Box';
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
  return <Box>
    <h2>Home</h2>
    <p>Most of the content is on the projects or the selfhosted page</p>
    </Box>
}
