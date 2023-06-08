import React from 'react'
import { MdDeleteForever } from "react-icons/md"


const Notes = ({ id, note, date, DeleteNote }) => {

    const handleDelete = (id) => {
        DeleteNote(id)
    }

    return (
        <div className='col-span-4 md:col-span-2 lg:col-span-1'>
            <div className='bg-yellow-200 rounded-lg p-2 min-h-[280px] flex flex-col justify-between'>
                <h1>{note}</h1>
                <div className='flex justify-between'>
                    <small>{date}</small>
                    <MdDeleteForever onClick={() => handleDelete(id)} size={30} />
                </div>
            </div>
        </div>
    )
}

export default Notes