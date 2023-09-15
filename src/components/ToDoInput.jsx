import React, { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'


function ToDoInput(props) {

    const [input, setInput] = useState("")

    return (
        <>
            <section>
                <input className='rounded-pill p-3 css'
                    type="text"
                    value={input}
                    placeholder='Enter your todo'
                    onChange={e=> { setInput(e.target.value) }}
                />
                <span><button
                    className='fs-3 px-4 mx-3 btn btn-primary rounded '
                    onClick={() => {
                        props.addList(input);
                        setInput("");
                    }}
                ><strong>+</strong></button></span>
            </section>
            
        </>
    )
}

export default ToDoInput