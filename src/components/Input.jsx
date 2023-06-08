import React, { useState } from 'react'

const Input = ({ GetNote }) => {
    const [text, setText] = useState("")
    const charLimit = 300

    const handleChange = (e) => {
        if (charLimit - e.target.value.length >= 0) {
            setText(e.target.value)
        }
    }

    const handleSubmit = () => {
        if (text.trim().length > 0) {
            GetNote(text)
            setText("")
        }
    }

    return (
        <div className='col-span-4 md:col-span-2 lg:col-span-1'>
            <div className='bg-green-200 rounded-lg p-2 min-h-[280px] flex flex-col justify-between'>
                <textarea className='bg-green-200 resize-none' placeholder='Enter text here...' cols="33" rows="10" value={text} onChange={handleChange}></textarea>
                <div className='flex justify-between'>
                    <small>{charLimit - text.length}</small>
                    <button className='hover:underline' onClick={handleSubmit}>save</button>
                </div>
            </div>
        </div>
    )
}

export default Input