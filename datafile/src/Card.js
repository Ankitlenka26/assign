import React from 'react'
import Data from './MOCK_DATA.json'

import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai';
import {BsGlobe} from 'react-icons/bs';

import './index.css'
import Bottom from './Bottom'

const Card = (props) => {
    const handleDeleteDataCard = (id) => {
        return props.handleDeleteApp(id); 
    }
    const handleEditDataCard = (editData) => {
        return props.handleEditDataApp(editData);
    }
    return(
         <div className='card'>
            <img className="card_img" src={props.image}/>
            <div className='card_body'>
               <h3 className='card_title'>{props.name}</h3> 
               <div className="icon_data"><AiOutlineMail/> <p className='user_details'>{props.email}</p></div>
                   <div className="icon_data">  <AiOutlinePhone></AiOutlinePhone> <p className='user_details'>{props.contact}</p></div>
                       <div className="icon_data"> <BsGlobe></BsGlobe> <p className='user_details'>{props.company}</p></div>
                <Bottom data={props} handleDelete = {handleDeleteDataCard} handleEditDataCard = {handleEditDataCard}/>

            </div>
            </div>
         
    )
}
export default Card;