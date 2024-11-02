import React from 'react'
import { useState } from 'react'
const Attendence = () => {
  const [color, setColor] = useState('green')
  const[data,setData]=useState('Present')
  function toggleStatus() {
    if (data === "Present") {
      setData("Absent");
      setColor("red");
    } else {
      setData("Present");
      setColor("green");
    }
  }
  return (
    <div>
      <button onClick={toggleStatus} className={`px-6 py-3  rounded-lg mt-3 ${
             color  === "green" ? "bg-green-500" : "bg-red-500"
            }`}> {data}</button>
    </div>
  )
}

export default Attendence
