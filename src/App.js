import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  const inputRef = useRef(0)
  const handleAdd = () => {
    setTodos(prev=>[...prev, work])
    setWork('')
    inputRef.current.focus()
  }
  return (
    <div className="flex flex-col gap-8 items-center justify-center border border-red-500 h-screen">
     <div className='flex gap-8'>
      <input 
        type="text" 
        className='outline-none border border-blue-500 rounded-md px-4 py-2 w-[400px]'
        placeholder='Add todo...' 
        value={work} 
        onChange={e=>setWork(e.target.value)}
        ref={inputRef}
        />
      <button 
        type='button' 
        className='outline-none bg-blue-500 rounded-md text-white py-2'
        onClick={handleAdd}
      >
        Add new
      </button>
     </div>
      <div>
        <h3 className='font-bold text-xl'>List todo:</h3>
        <ul>
          {todos?.map((item, index)=>{
            return(
              <li key={index}>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
