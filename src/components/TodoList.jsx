import React from 'react'
import ToDoInput from './ToDoInput'
import { RiDeleteBin3Fill } from 'react-icons/ri'


function TodoList(props) {
  return (
    <>
            <div className='d-flex justify-content-between mt-4 border rounded-pill p-2 list'>
                <li className='text-light mt-2 '>{props.item}</li>
                <button className='btn btn-dark rounded-circle text-danger'
                    onClick={e => {
                        props.deleteItem(props.index)
                    }}
                >  <RiDeleteBin3Fill /> </button>
            </div>

        </>
  )
}

export default TodoList







