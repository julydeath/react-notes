import React from 'react'
import Notes from './Notes'
import Input from './Input'

const NotesList = ({ list, GetNote, DeleteNote }) => {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {list.map((li) => <Notes key={li.id} id={li.id} note={li.note} date={li.date} DeleteNote={DeleteNote} />)}
            <Input GetNote={GetNote} />
        </div>
    )
}

export default NotesList