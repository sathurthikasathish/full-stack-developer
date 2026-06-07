import React from 'react'
import Child from '../Child'

const Parent = () => {
  return (
    <div>
    <Child name="Rithika" age={18} marks={[2,4,8,6,9]} person={{name:"Rithi",dept:["AIDS","CT"]}}/>
    </div>
  )
}

export default Parent