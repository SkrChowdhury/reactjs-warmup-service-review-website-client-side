import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, description } = service;

  return (
    <div className="card card-compact w-25 bg-base-100 shadow-xl d-flex">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="fitness" className="w-100  mx-auto" />
        </PhotoView>
      </PhotoProvider>

      {/* <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>

        <p className="text-2xl text-orange-600 font-semibold">
          {' '}
          {description.slice(0, 100)}
        </p>

        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div> */}

      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div className="text-lg font-semibold">{title}</div>
            <p className="text-sm text-gray-900">
              {' '}
              {description.slice(0, 100)}
            </p>
            <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
              {price}
            </div>
          </div>
          <Link
            to={`/details/${_id}`}
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
