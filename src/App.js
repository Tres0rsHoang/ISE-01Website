
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import EmptyPage from "./Pages/EmptyPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/EmptyPage' element={<EmptyPage/>} />
        </Routes>
      </Router>
  );
}
export default App;
