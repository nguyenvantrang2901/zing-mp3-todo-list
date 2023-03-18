import { useState, useRef } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoList from './Todo';

function App() {
  
  return (
    <div>
      <TodoList/>
    </div>
  );
}

export default App;
