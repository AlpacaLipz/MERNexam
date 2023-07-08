import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom'

import CreatePage from './views/CreatePage';
import Dashboard from './views/Dashboard';
import EditPage from './views/EditPage';
import DetailsPage from "./views/DetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new' element={<CreatePage/>} />
        <Route path='/edit/:id' element={<EditPage/>} />
        <Route path='/:id' element={<DetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;

