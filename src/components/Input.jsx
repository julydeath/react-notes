import React, { useState } from 'react'

const Input = ({ GetNote }) => {
    const [text, setText] = useState("")
    const [count, setCount] = useState(200)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        GetNote(text)
        setText("")
    }

    return (
        <div className='col-span-4 md:col-span-2 lg:col-span-1'>
            <div className='bg-green-200 rounded-lg p-2 min-h-[280px] flex flex-col justify-between'>
                <textarea className='bg-green-200 resize-none' cols="33" rows="10" value={text} onChange={handleChange}></textarea>
                <div className='flex justify-between'>
                    <small>{count}</small>
                    <button onClick={handleSubmit}>save</button>
                </div>
            </div>
        </div>
    )
}

export default Input