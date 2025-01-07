import React, { useRef } from 'react'
import Studentbooklist from './Studentbooklist'
import Studentheader from './Studentheader'
import Homefooter from '../Homefooter'
import Studentbookborrow from './Studentbookborrow'

function Studentlogin() {
  const refabt=useRef()
  const onAbt=()=>{
    refabt.current.scrollIntoView()
  }
  return (
    <div>
      <Studentheader a={onAbt}/>
        <div>
            <Studentbooklist ref={refabt}/>
        </div>
      <Studentbookborrow/>
    </div>
  )
}

export default Studentlogin