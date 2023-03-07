import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editUserAdminAsync } from './adminSlice';

const EditUserAdmin = () => {
  const [firstN, editFName] = useState("");
  const [lastN, editLName] = useState("");
  const [address, editAddress] = useState("");
  const [phone, editPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFields = {};
    if (firstN) updatedFields.firstN = firstN;
    if (lastN) updatedFields.lastN = lastN;
    if (address) updatedFields.address = address;
    if (phone) updatedFields.phone = phone;
    if (isAdmin !== undefined) updatedFields.isAdmin = isAdmin;
      dispatch(editUserAdminAsync({ id, ...updatedFields }));
    navigate(`/dashboard`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstN">First Name: </label>
          <input
          name="firstN"
          placeholder='First Name...'
          value={firstN}
          onChange={(e) => editFName(e.target.value)}
        />

        <label htmlFor="lastN">Last Name: </label>
        <input
          name="lastN"
          placeholder='Last Name...'
          value={lastN}
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

        <label htmlFor="isAdmin">Admin Status: </label>
        <select defaultValue={isAdmin} onChange={(e) => setIsAdmin(e.target.value)}>
          <option value={true}>Admin</option>
          <option value={false}>Not an Admin</option>
        </select>


        <button type='submit' disabled={!firstN && !lastN && !phone && !address && !isAdmin ? true : false}>Save Changes</button>
      </form>
    </div>
  )
}

export default EditUserAdmin;
