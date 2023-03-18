import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
    const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  const inputRef = useRef(0)
  const handleAdd = () => {
    if(todos?.some(item=>item.id === work?.replace(/\s/g,''))){
      inputRef.current.focus()
      toast.warning("Đã tồn tại.")
    }
    else{
      setTodos(prev=>[...prev, {id:work?.replace(/\s/g,''), job:work}])
      setWork('')
      inputRef.current.focus()
      toast.success("Thêm mới thành công.")
    }
  }
  const handleDelete=(id)=>{
    // console.log(id)
    // lấy những thằng nào có id khác với id đc click thì sẽ ko hiển thị ra id đc chọn đó
    // => đồng nghĩa với việc xóa thành công.
    setTodos(prev=>prev.filter(item=>item.id !== id))
    toast.success("Xóa thành công.")
  }
  return (
    <div>TodoList
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
          {todos?.map((item)=>{
            return(
              <li key={item.id} className="flex gap-8 items-center">
                <span className='w-6 my-2'>{item.job}</span>
                <button 
                  className='bg-red-500 text-white rounded-lg'
                  onClick={()=>handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>

    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
        {/* Same as */}
    <ToastContainer />
    </div>
  )
}

export default TodoList