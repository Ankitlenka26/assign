
import React from 'react'
import {FiHeart} from 'react-icons/fi';
import {AiFillEdit} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';
const Bottom = () => {
  return ( 
    <div className='bottom'>
        <div className='buttons'>

    <div className='heart'>  <FiHeart size="1.45rem" color="red"></FiHeart></div>
 <div className='edit_btn'><AiFillEdit size="1.45rem" color="rgba(0,0,0,.65)"></AiFillEdit>
 </div>
 <div className="delete_btn"><AiFillDelete size="1.45rem" color="rgba(0,0,0,.65)"></AiFillDelete>
 </div>


</div>
 </div>
  )
}

export default Bottom