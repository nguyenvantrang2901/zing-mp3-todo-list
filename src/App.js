import { useState } from 'react';
import './App.css';

function App() {
  const [work, setWork] = useState('')
  return (
    <div className="flex gap-8 items-center justify-center border border-red-500 h-screen">
      <input 
        type="text" 
        className='outline-none border border-blue-500 rounded-md px-4 py-2 w-[400px]'
        placeholder='Add todo...' 
        value={work} 
        onChange={e=>setWork(e.target.value)}
        />
      <button 
        type='button' 
        className='outline-none bg-blue-500 rounded-md text-white py-2'
      >
        Add new
      </button>
    </div>
  );
}

export default App;
