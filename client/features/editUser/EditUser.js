import React, { useState } from 'react';
import { editUserAsync } from '../editUser/editUserSlice'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const EditUser = () => {
  const [fName, editFName] = useState("");
  const [lName, editLName] = useState("");
  const [address, editAddress] = useState("");
  const [phone, editPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserAsync({ fName, lName, address, phone, id}));
    alert("User profile has been updated!")
    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fName">First Name: </label>
          <input
          name="fName"
          placeholder='First Name...'
          value={fName}
          onChange={(e) => editFName(e.target.value)}
        />

        <label htmlFor="lName">Last Name: </label>
        <input
          name="lName"
          placeholder='Last Name...'
          value={lName}
          onChange={(e) => editLName(e.target.value)}
        />

        <label htmlFor="address">Address: </label>
        <input
          name="address"
          placeholder='Address...'
          value={address}
          onChange={(e) => editAddress(e.target.value)}
        />

        <label htmlFor="phone">Phone Number: </label>
        <input
          name="phone"
          placeholder='(123)456-7890'
          value={phone}
          onChange={(e) => editPhone(e.target.value)}
        />
        <button className="formButton" type='submit'>Submit Changes</button>
      </form>
    </div>
  )
}

export default EditUser;
