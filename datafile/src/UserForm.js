import { useState } from "react";

export default function UserForm(props) {
  console.log('Props in UserForm File')
  console.log(props);
  const [contactInfo, setContactInfo] = useState({
    id : props.id,
    name: props.name,
    email: props.email,
    phone: props.contact,
    website: props.company
  });
  const handleNameChange = (e) => {
      const newContactInfo = contactInfo; 
      newContactInfo.name = e.target.value; 
      setContactInfo(newContactInfo);
  }
  const handleEmailChange = (e) => {
    const newContactInfo = contactInfo; 
    newContactInfo.email = e.target.value; 
    setContactInfo(newContactInfo);
  } 
  const handllePhoneChange = (e) => {
    const newContactInfo = contactInfo; 
    newContactInfo.phone = e.target.value; 
    setContactInfo(newContactInfo);
  }
  const handleWebsiteChange = (e) => {
    const newContactInfo = contactInfo; 
    newContactInfo.website = e.target.value; 
    setContactInfo(newContactInfo);
  }
  const handleSubmit = () => {
    console.log(props); 
    props.handleEditData(contactInfo); 
  }
  return (
    <div className="form-container">
      <form>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder={contactInfo.name}
            onChange = {handleNameChange}
          />
        </div>
        <div>
        <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={contactInfo.email}
            onChange = {handleEmailChange}
          />
        </div>
        <div>
         <label>Phone Number</label>
          <input
            type="text"
            name="phonenumber"
            placeholder={contactInfo.phone}
            onChange ={handllePhoneChange}
          />
        </div>
        <div>
        <label>Website</label>
          <input
            type="text"
            name="Website"
            placeholder={contactInfo.website}
            onChange = {handleWebsiteChange}
          />
        </div>
        <div>
          <button onSubmit={handleSubmit}>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}
