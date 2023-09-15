import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';

function App() {

  const [ list, setList ] = useState([])

  let addList = (input) => {
    setList([...list, input])
  }

  const deleteList = (key) => {
    let updatedList = [...list]
    updatedList.splice(key,1)
    setList([...updatedList])
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark" style={{ height: '100vh' }}>
        <div className='bg-dark responsive' >
          <h1 className='text-light text-center mb-5'>MY TODO APP</h1>
          <hr className='text-light line'/>
          <ToDoInput addList={addList }/>
          <hr className='text-light line'/>
          {
            list.map((val, key)=>{
              return <TodoList key={key} index={key} item={val} deleteItem={deleteList}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
