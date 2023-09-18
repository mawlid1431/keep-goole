
import React from 'react';
import './index.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea'
import Note from './components/Note';
const App = () => {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note />
    </div>
  )
}

export default App

