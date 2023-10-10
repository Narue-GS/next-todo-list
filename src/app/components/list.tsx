"use client"

import { useState } from "react";

import Item from "./item";

export default function List() {
  const [newItem, setNewItem] = useState("")

  const [items, setItems] = useState([
    "fake1",
    "fake2",
    "fake3",
    "fake4",
  ]) 

  return (
    <section className="flex justify-center">
      <div className="border rounded-lg p-4 mt-10">
        <div>
          <input onChange={(e) => {setNewItem(e.target.value)}} className="border px-2 p-1 rounded-full" type="text"/>
          <button onClick={() => {setItems([...items, newItem])}}>Add</button>
        </div>
        <ul className="divide-y border rounded-lg mt-3">
          {items.map((itemData) => (
            <Item key={itemData} title={itemData}/>
          ))}
        </ul>
      </div>
    </section>
  )
}