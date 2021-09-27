import React from 'react';
import './App.css';

import SideBar from './components/sidebar.component'
import Element from './components/element.component'

export default function App() {
  return(
    <div className="flex">
      <SideBar />
      <Element />
    </div>
  )
}