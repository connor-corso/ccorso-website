import * as React from 'react';
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
import Guides from 'guides/Guides';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            
          <Route path='/projects' element={<Projects />} />
        
          <Route path='/' element={<Homepage />} />
          
          <Route path='/selfhosted' element={<SelfhostedServices />} />

          <Route path='/guides' element={<Guides />} />

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>
    </Router>
    
    
  );
}

