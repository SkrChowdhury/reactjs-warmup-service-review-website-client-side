import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';

const AddSer = () => {
  const { user } = useContext(AuthContext);

  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/addNewService?email=${user}`)
      .then((res) => res.json())

      .then((data) => setOrder(data));
  }, []);
  //user?.email
  //user.email

  return (
    <div>
      <div className="card card-compact w-25 bg-base-100 shadow-xl d-flex">
        <figure>
          <img src={order.img} alt="fitness" className="w-100" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{order.location}</h2>
          <p className="text-2xl text-orange-600 font-semibold">Price: 20</p>

          <p className="text-2xl text-orange-600 font-semibold">
            {' '}
            {order.details}
          </p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSer;
