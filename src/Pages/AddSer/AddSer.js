import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const AddSer = () => {
  const { user } = useContext(AuthContext);

  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/addNewService?email=${user}`)
      .then((res) => res.json())

      .then((data) => setOrder(data));
  }, []);

  return (
    <div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="card card-compact w-25 bg-base-100 shadow-xl d-flex">
          <PhotoProvider>
            <PhotoView src={order.img}>
              <img src={order.img} alt="fitness" className="w-100  mx-auto" />
            </PhotoView>
          </PhotoProvider>

          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">{order.location}</div>
                <p className="text-sm text-gray-900"> {order.details}</p>
                <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                  {/* {price} */}
                </div>
              </div>
              <Link
                // to={`/details/${_id}`}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSer;
