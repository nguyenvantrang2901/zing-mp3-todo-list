import { useState, useRef } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const {test} = useSelector(state=>state.app)
  console.log(test)
  return (
    <div>
      {/* <TodoList/> */}
      app
    </div>
  );
}

export default App;
