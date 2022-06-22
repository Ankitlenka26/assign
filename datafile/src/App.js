import React , {useState} from 'react'
import Data from './MOCK_DATA.json'
import './index.css'
import Card from './Card'

export const App = () => {
  const [data , setData] = useState(Data); 
  const handleDeleteDataApp = (deleteId) => {
    console.log('We have to delete from data here')
    const newData = data.filter(item => item.id !== deleteId); 
    setData(newData); 
  }
  const handleEditDataApp = (editData) => {
    console.log('We have to edit the data here');
  }
  return (
  <section className='wrapper'>
    { data.map((user)=>{
         return(
            <Card key={user.id} {...user} handleDeleteApp = {handleDeleteDataApp} handleEditDataApp = {handleEditDataApp}></Card>
         )
          })
    }
  </section>
  )
}

export default App;