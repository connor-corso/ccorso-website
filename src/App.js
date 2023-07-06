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
import Projects from 'projects/Projects';
import SelfhostedServices from 'selfhostedServices/SelfhostedServices';
import Homepage from 'homepage/Homepage';


export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            
          <Route path='/projects' element={<Projects />} />
        
          <Route path='/' element={<Homepage />} />
          
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
