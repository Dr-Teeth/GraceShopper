import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleUser, selectUser } from '../userPage/userPageSlice';
import { Link, useParams } from 'react-router-dom';

const SingleUser = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch, id]);

  const {firstN, lastN, address, phone, email} = user ? user : {}

  const requestStatus = useSelector((state) => state.singleUser.requestStatus);

  if (requestStatus === 'pending') {
        return <div>Loading...</div>;
      };
      if (!user) {
        return <div>User not found</div>;
      };

  return (
    <div>
      <h1>Your Profile</h1>
        {user ? (
          <div>
             <h1>Name: {lastN}, {firstN}</h1>
             <h2>Address: {address}</h2>
             <h2>Email: {email}</h2>
             <h2>Phone #: {phone}</h2>
             <h2><Link to={`/editUser/${auth.me.id}`} id={auth.me.id}>Edit Profile Info?</Link></h2>
             <Link to={"/home"}>Return to Home Page</Link>
          </div>
        ) : (
          <div>Loading...</div>
        )}
    </div>
  )};

export default SingleUser;
