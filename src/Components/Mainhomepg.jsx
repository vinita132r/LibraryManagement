import React, { useRef } from 'react'
import Homefooter from './Homefooter'
import Homeheader from './Homeheader'
import Homepg from './Homepg'

function Mainhomepg() {
    const refabt=useRef()
    const onAbt=()=>{
        refabt.current.scrollIntoView()
    }
  return (
    <div>
        <Homeheader a={onAbt}/>
        <div>
            <Homepg ref={refabt}/>
        </div>
        <Homefooter/>
    </div>
  )
}

export default Mainhomepg