import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

function App() {
  const [list, setList] = useState([]);

  const GetNote = (note) => {
    setList([...list, { id: nanoid(), note: note, date: Date() }]);
  };

  const DeleteNote = (id) => {
    const newList = list.filter((li) => li.id !== id);
    setList(newList);
  };

  return (
    <div className="max-w-[1240px] mx-auto mt-2 px-2">
      <h1 className="text-3xl md:text-5xl italic font-bold text-center mb-6 underline bg-gradient-to-r pb-4 rounded-md from-yellow-200 to-green-200">
        React Notes
      </h1>
      <NotesList list={list} GetNote={GetNote} DeleteNote={DeleteNote} />
    </div>
  );
}

export default App;
