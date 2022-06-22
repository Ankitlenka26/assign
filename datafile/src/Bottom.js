
import React , {useState} from 'react'
import {FiHeart} from 'react-icons/fi';
import {AiFillEdit , AiFillDelete , AiFillHeart} from 'react-icons/ai';
const Bottom = (props) => {
  const [heart , setHeart] = useState(false); 
  const handleHeartButton = (e) => {
    if(heart == false){
      setHeart(true); 
    }else{
      setHeart(false); 
    }
    return; 
  }
  const handleEditButton = (e) => {
    console.log('edit buttton got clicked!'); 
    return; 
  }
  const handleDeleteButton = () => {
    props.handleDelete(props.data.id);
    return; 
  }
  return ( 
    <div className='bottom'>
      <div className='buttons'>
      {
        heart ? 
        <button style={{padding: '0',border: 'none',background: 'none'}} onClick= {handleHeartButton}><div className='heart'>  <AiFillHeart size="1.45rem" color="red"></AiFillHeart></div></button>: 
        <button style={{padding: '0',border: 'none',background: 'none'}} onClick= {handleHeartButton}><div className='heart'>  <FiHeart size="1.45rem" color="red"></FiHeart></div></button>
      }
        <button style={{padding: '0',border: 'none',background: 'none'}} onClick= {handleEditButton}><div className='edit_btn'><AiFillEdit size="1.45rem" color="rgba(0,0,0,.65)"></AiFillEdit></div></button>
        <button style={{padding: '0',border: 'none',background: 'none'}} onClick= {handleDeleteButton}><div className="delete_btn"><AiFillDelete size="1.45rem" color="rgba(0,0,0,.65)"></AiFillDelete></div></button>
      </div>
    </div>
  )
}

export default Bottom